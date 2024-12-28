import mongoose from "mongoose";

const voucher = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    value: {
      type: Number,
      required: true,
    },
    type_voucher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "type_voucher",
      required: true,
    },
    time_start: {
      type: Date,
      required: false,
    },
    time_end: {
      type: Date,
      required: false,
    },
    min_order: {
      type: Number,
      required: false,
      default: null,
    },
    quantity: {
      type: Number,
      required: false,
      default: null,
    },
  },
  { timestamps: true, versionKey: false }
);
export default mongoose.model("voucher", voucher);
