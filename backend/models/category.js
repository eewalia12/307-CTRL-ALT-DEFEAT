import mongoose from "mongoose";
import Inventory from "./inventory.js";

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    inventory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Inventory,
        required: false,
      },
    ],
    notes: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: "categories" },
);

const Category = mongoose.model("Category", CategorySchema);

export default Category;
