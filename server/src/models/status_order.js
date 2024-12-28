import mongoose from "mongoose";

const status_order = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true, versionKey: false }
);
export default mongoose.model("status_order", status_order);
