import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    token: { type: String, required: true },
    //  createdAt: {type: Date, default: Date.now(), expires: 3600}
  },
  {
    timestamps: true,
  }
);

const Token = mongoose.model("token", tokenSchema);

export default Token;
