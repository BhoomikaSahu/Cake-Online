import express from "express";
import Data from "./Data.js";
const app = express();

app.get("api/product/:id", (req, res) => {
  const product = Data.products.find((product) => product.id === req.params.id);
  if(product){
      res.send(product)
  }else{
      res.status(404).send({message: 'Product not found'});
  }
});
app.get("/api/product/1", (req, res) => {
  res.send(Data.products[0]);
  // console.log(Data);
});
app.get("/api/product", (req, res) => {
  res.send(Data.products);
  // console.log(Data);
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
