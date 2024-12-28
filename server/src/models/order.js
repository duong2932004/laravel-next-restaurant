import mongoose from "mongoose";

const order = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    method: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "method",
      required: true,
    },
    status_order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "status",
      required: true,
    },
    voucher_applied: {
      type: String,
      required: false,
    },
    total: {
      type: Number,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);
export default mongoose.model("order", order);
