import mongoose from "mongoose";

const variant_color = new mongoose.Schema(
  {
    variant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "variant",
      required: true,
    },
    color: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "color",
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);
export default mongoose.model("variant_color", variant_color);
