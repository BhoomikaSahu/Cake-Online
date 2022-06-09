import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  process.env.DB_URL+process.env.DB_NAME+'?retryWrites=true&w=majority',
  process.env.MONGODB_URL, //|| "mongodb://localhost:27017/cake-online",
  {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
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
app.use("/api/orders", orderRouter);
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

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
