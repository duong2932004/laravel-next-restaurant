import mongoose from "mongoose";

const type_voucher = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true, versionKey: false }
);
export default mongoose.model("type_voucher", type_voucher);
