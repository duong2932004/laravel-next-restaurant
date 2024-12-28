import mongoose from "mongoose";

const order_detail = new mongoose.Schema(
  {
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "order",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
      default: "/images/default/404.png",
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);
export default mongoose.model("order_detail", order_detail);
