import { Link, useParams } from "react-router-dom";
// import Data from "../Data";
import Rating from "../components/Rating";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { detailsProduct } from "../actions";

const ProductScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productID = id;

  const productDetails = useSelector((state) => state.productDetails);
  console.log('ProductDetails--- ', productDetails);
  const { loading, product, error } = productDetails;
  const productId = product;

  useEffect(() => {
    dispatch(detailsProduct(productID));
  }, [dispatch, productID]);


  // const [product, setProduct] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const { data } = await axios.get("/api/product");
  //       setLoading(false);
  //       setProduct(data);
  //     } catch (err) {
  //       // console.log("Bhoomika", error);
  //       // console.log(err);
  //       setError(err.message);
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // const { id } = useParams();
  // const productId = product.find((item) => item.id === Number(id));

  if (loading) {
    return <LoadingBox />;
  } else if (error) {
    return <MessageBox variant="danger">{error}</MessageBox>;
  } else if (!productId) {
    return <div>Product not found</div>;
  }
  return (
    <>
      <Header />
      <div>
        <Link to="/">Back to result</Link>
        <div className="row top">
          <div className="col-2">
            <img
              className="large"
              src={`../${productId.img}`}
              alt={productId.name}
            />
          </div>
          <div className="col-1">
            <ul>
              <li>
                <h1>{productId.name}</h1>
              </li>
              <li>
                <Rating rating={productId.rating} reviews={productId.reviews} />
              </li>
              <li>Price: {`${productId.price}/-`}</li>
              <li>
                Description:
                <p>{productId.description}</p>
              </li>
            </ul>
          </div>

          <div className="col-1">
            <div className="card card-body">
              <ul>
                <li>Seller </li>
                <li>
                  <div className="row">
                    <div>Price</div>
                    <div className="price">{`${productId.price}/-`}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Status</div>
                    <div>
                      {productId.countInStock > 0 ? (
                        <span className="success">In Stock</span>
                      ) : (
                        <span className="danger">Unavailable</span>
                      )}
                    </div>
                  </div>
                </li>
                {productId.countInStock > 0 && (
                  <>
                    <li>
                      <div>
                        <div>Qty</div>
                        <div>
                          {/* <select
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select> */}
                        </div>
                      </div>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default ProductScreen;
