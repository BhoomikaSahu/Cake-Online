import { Link, useParams } from "react-router-dom";
import Data from "../Data";
import Rating from "../components/Rating";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Product = () => {
  const { id } = useParams();
  const product = Data.find((item) => item.id === Number(id));
  // console.log(Data);
  // console.log(product);
  //   console.log(product.rating);
  //   console.log(product.reviews);

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <>
      <Header />
      <div>
      <Link to="/">Back to result</Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={`../${product.img}`} alt={product.name} />
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating rating={product.rating} reviews={product.reviews} />
            </li>
            <li>Price: {`${product.price}/-`}</li>
            <li>
              Description:
              <p>{product.description}</p>
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
                  <div className="price">{`${product.price}/-`}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="danger">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              {product.countInStock > 0 && (
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
export default Product;
