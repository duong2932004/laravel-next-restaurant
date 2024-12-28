import mongoose from "mongoose";

const voucher_product = new mongoose.Schema(
  {
    voucher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "voucher",
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);
export default mongoose.model("voucher_product", voucher_product);
