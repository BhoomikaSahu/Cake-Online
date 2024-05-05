import express from "express";
import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import Token from "../models/tokenModel.js";
const verifyRouter = express.Router();

verifyRouter.get(
  "/:id/verify/:token",
  expressAsyncHandler(async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.params.id });
      if (!user) return res.status(400).send({ message: "Invalid link" });

      const token = await Token.findOne({
        userId: user._id,
        token: req.params.token,
      });
      if (!token) return res.status(400).send({ message: "Invalid link" });

      await User.updateOne({ _id: user._id }, { $set: { verified: true } });

      res.status(200).send({ message: "Email verified successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  })
);

export default verifyRouter;
