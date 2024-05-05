import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";
import verifyRouter from "./routers/verifyRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/cake-online", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/users", userRouter);
app.use("/api/user", verifyRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});

// cloudinary.config({
//   cloud_name: 'dyus4o02s',
//   api_key: '818672866995164',
//   api_secret: 'r2kVh7Qm-T_aHCqrwZ6Fp_K4czE'
// });
// // console.log(cloudinary);
// cloudinary.uploader.upload('./frontend/public/img/img2.jpeg',
// {
//   use_filename: true,
//   folder: "cakeonline"
// },
// (err, image) => {
//   if(err){
//     console.log(err);
//   }else{
//     console.log('image uploaded ---', image);
//   }
// })
// "start": "nodemon --watch backend --exec node --experimental-modules backend/server.js"

// app.get("/api/products/:id", (req, res) => {
//   const product = Data.products.find((product) => product.id === Number(req.params.id));
//   if(product){
//       res.send(product)
//   }else{
//       res.status(404).send({message: 'Product not found'});
//   }
// });

// app.get("/api/products", (req, res) => {
//   res.send(Data.products);
// });

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });
