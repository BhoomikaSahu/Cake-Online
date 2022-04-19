import express from "express";
import mongoose from "mongoose";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";

const app = express();

mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost:27017/cake-online",
  {
    // useNewUrlParser: true,
    // useFindAndModify: true,
    // useUnifiedTopology: true,
    // useNewUrlParser: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true
  }
);

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

app.use("/api/users", userRouter);

app.use("/api/products", productRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV == "production") {
  app.use(express.static("frontend/build"));
}

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});

// "start": "nodemon --watch backend --exec node --experimental-modules backend/server.js"
