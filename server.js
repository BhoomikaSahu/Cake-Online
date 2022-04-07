import express from "express";
import Data from "./Data.js";
const app = express();

app.get("/api/product/:id", (req, res) => {
  const product = Data.products.find((product) => product.id === Number(req.params.id));
  if(product){
      res.send(product)
  }else{
      res.status(404).send({message: 'Product not found'});
  }
});

app.get("/api/product", (req, res) => {
  res.send(Data.products);
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});

const port = process.env.PORT || 5000;

if(process.env.NODE_ENV == "production"){
  app.use(express.static("frontend/build"));
}

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});



// "start": "nodemon --watch backend --exec node --experimental-modules backend/server.js"