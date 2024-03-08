import Location from "../models/location.js";
import Category from "../models/category.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

mongoose.set("debug", true);

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

async function findLocationById(_id) {
  console.log(_id);
  const location = await Location.findOne({ _id });
  console.log(location);
  return location;
}

async function findCategoryByLocation(Location) {
  return Category.find({ _id: { $in: Location.categories } });
}

export default {
  findLocationById,
  findCategoryByLocation,
};