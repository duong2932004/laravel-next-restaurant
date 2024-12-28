import mongoose from "mongoose";

const user = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    email_verified_at: {
      type: Date,
      default: null,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    phone_number: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      default: "/images/default/user.png",
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "role",
      required: true,
    },
    active_status: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "active_status",
      required: true,
    },
    refresh_token: {
      type: String,
      select: false,
    },
  },
  { timestamps: true, versionKey: false }
);

user.index({ email: 1, phone_number: 1 });

export default mongoose.model("user", user);
