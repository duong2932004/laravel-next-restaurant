import mongoose from "mongoose";

const product_variation = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
    variant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "variant",
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);
export default mongoose.model("product_variation", product_variation);
