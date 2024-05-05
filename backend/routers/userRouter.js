import express from "express";
import bcrypt from "bcrypt";
import Data from "../Data.js";
import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import Token from "../models/tokenModel.js";
import { generateToken, isAuth, sendEmail } from "../utils.js";

const userRouter = express.Router();

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await User.remove({});
    const createdUsers = await User.insertMany(Data.users);
    res.send({ createdUsers });
  })
);

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          verified: user.verified,
          token: generateToken(user),
        });
        if(!user.verified){
          let token = await Token.findOne({userId: user._id})
          if(!token){
            const token = new Token({
              userId: user._id,
              token: generateToken(user),
            })      
            const createdToken = await token.save();  
            
            const verificationURL = `${process.env.WEBSITE_URL}/api/user/${createdToken.userId}/verify/${createdToken.token}`;

            await sendEmail(
              user.email,
              "Verify Email",
              verificationURL,
              user.name
            ).catch(console.error);
          }
          else {
            const verificationURL = `${process.env.WEBSITE_URL}/api/user/${token.userId}/verify/${token.token}`;

            await sendEmail(
              user.email,
              "Verify Email",
              verificationURL,
              user.name
            ).catch(console.error);

          }
        }
      }
    }
    else res.status(401).send({ message: "Invalid email or password" });
  })
);

userRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdUser = await user.save();
    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      verified: createdUser.verified,
      token: generateToken(createdUser),
    });

    const token = new Token({
      userId: createdUser._id,
      token: generateToken(createdUser),
    });
    const createdToken = await token.save();

    const verificationURL = `${process.env.WEBSITE_URL}/api/user/${createdToken.userId}/verify/${createdToken.token}`;

    await sendEmail(
      createdUser.email,
      "Verify Email",
      verificationURL,
      createdUser.name
    ).catch(console.error);
  })
);

userRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: "User Not Found" });
    }
  })
);

userRouter.put(
  "/profile",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 8);
      }
      const updatedUser = await user.save();
      res.send({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser),
      });
    }
  })
);

export default userRouter;
