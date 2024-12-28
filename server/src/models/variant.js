import mongoose from "mongoose";

const variant = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    real_price: {
      type: Number,
      required: true,
    },
    promotional_price: {
      type: Number,
      required: false,
      default: null,
    },
    image: {
      type: String,
      default: "/images/default/404.png",
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
  },
  { timestamps: true, versionKey: false }
);

variant.index({ real_price: 1 });

export default mongoose.model("variant", variant);
