import mongoose from "mongoose";

const active_status = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamp: true, versionKey: false }
);

export default mongoose.model("active_status", active_status);
