import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  createProduct,
  deleteProduct,
  listProducts,
} from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import {
  PRODUCT_CREATE_RESET,
  PRODUCT_DELETE_RESET,
} from "../constants/productConstants";

export default function ProductListScreen(props) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [reviews, setReviews] = useState();
  const [countInStock, setCountInStock] = useState();
  const [imgUrl, setImgUrl] = useState("");
  const [isCreateProduct, setIsCreateProduct] = useState(false);

  const [loadingUpload, setLoadingUpload] = useState(false);
  const [successUpload, setSuccessUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");

  const CLOUDINARY_API =
    "https://api.cloudinary.com/v1_1/dyus4o02s/image/upload";

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const dispatch = useDispatch();

  useEffect(() => {
    if (successCreate) {
      dispatch({ type: PRODUCT_CREATE_RESET });
    }
    if (successDelete) {
      dispatch({ type: PRODUCT_DELETE_RESET });
    }
    dispatch(listProducts());
  }, [dispatch, successCreate, successDelete]);

  const deleteProductHandler = (product) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteProduct(product._id));
    }
  };
  ///  <summary> Delete product from product list </summary>
  ///        <param name="product object"></param>

  const createProductHandler = () => {
    dispatch(
      createProduct(
        name,
        imgUrl,
        rating,
        price,
        description,
        reviews,
        countInStock
      )
    );
    setIsCreateProduct(false);
    setSuccessUpload(false);
  };
  ///  <summary> Dispatch product details </summary>

  const uploadImage = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", "uploadImage");
    data.append("cloud_name", "dyus4o02s");
    fetch(CLOUDINARY_API, {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setImgUrl(data.url);
        setLoadingUpload(false);
        setSuccessUpload(true);
      })
      .catch((err) => {
        setErrorUpload(error.message);
        setLoadingUpload(false);
      });
  };
  ///  <summary> Upload image on cloudinary </summary>
  ///        <param name="event object"></param>
  ///        <returns>Image URL</returns>

  return (
    <>
      <Header />
      <div>
        <div className="row">
          <h1>Products</h1>
          <button
            type="button"
            className="primary"
            onClick={() => setIsCreateProduct(true)}
          >
            Create Product
          </button>
          {isCreateProduct && (
            <form
              className="form createProduct"
              onSubmit={createProductHandler}
            >
              <div>
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Product name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="img">Product Image</label>
                <input
                  type="file"
                  id="img"
                  label="Choose Image"
                  onChange={(e) => setImg(e.target.files[0])}
                  required
                />
                {loadingUpload && <LoadingBox></LoadingBox>}
                {successUpload && (
                  <MessageBox variant="success">
                    Image Uploaded Successfully
                  </MessageBox>
                )}
                {errorUpload && (
                  <MessageBox variant="danger">{errorUpload}</MessageBox>
                )}
                <button onClick={(e) => uploadImage(e)}>Upload</button>
              </div>
              <div>
                <label htmlFor="rating">Product Rating</label>
                <input
                  type="text"
                  id="rating"
                  placeholder="Enter Product rating"
                  required
                  onChange={(e) => setRating(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="price">Product price</label>
                <input
                  type="text"
                  id="price"
                  placeholder="Enter Product price"
                  required
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="description">Product Description</label>
                <input
                  type="text"
                  id="description"
                  placeholder="Enter Product description"
                  required
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="reviews">Product Reviews</label>
                <input
                  type="number"
                  id="reviews"
                  placeholder="Enter Product reviews"
                  required
                  onChange={(e) => setReviews(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="countInStock">Product CountInStock</label>
                <input
                  type="number"
                  id="countInStock"
                  placeholder="Enter Product countInStock"
                  required
                  onChange={(e) => setCountInStock(e.target.value)}
                />
              </div>
              <button className="primary" type="submit">
                Done
              </button>
            </form>
          )}
        </div>

        {loadingDelete && <LoadingBox></LoadingBox>}
        {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}

        {loadingCreate && <LoadingBox></LoadingBox>}
        {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>PRICE</th>
                  <th>STOCK</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  return (
                    <tr key={product._id}>
                      <td>{product._id}</td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.countInStock}</td>
                      <td>
                        <button
                          type="button"
                          className="small"
                          onClick={() => deleteProductHandler(product)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
