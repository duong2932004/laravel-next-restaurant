import mongoose from "mongoose";

const color = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    color: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true, versionKey: false }
);
export default mongoose.model("color", color);
