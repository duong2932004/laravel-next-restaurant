import mongoose from "mongoose";

const product = new mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
      required: true,
    },
    active_status: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "active_status",
      required: true,
    },
    name: {
      type: String,
      required: true,
      index: true,
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
    describe: {
      type: String,
      default: "",
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    sold: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  { timestamps: true, versionKey: false }
);

product.index({ category: 1, active_status: 1 });
product.index({ real_price: 1 });

export default mongoose.model("product", product);
