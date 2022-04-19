import { useEffect } from "react";
// import Data from "../Data";
import Card from "./Card";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
// import axios from "axios";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  const productList = useSelector((state) => state.productList);
  const { loading, error, product } = productList;
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
  //       setError(err.message);
  //       setLoading(false);
  //     }
  //   };
  //   console.log('Bhoomika', product);
  //   fetchData();
  // }, []);
  


  // console.log(productList);
  // console.log(loading, 'Bhoomika', product, error);

  if (loading) {
    return <LoadingBox />;
  } else if (error) {
    return <MessageBox variant="danger">{error}</MessageBox>;
  }
  return (
    <>
      <div className="main">
        <div className="row center">
          {product.map((item) => {
            return (
              <Card
                key={item._id}
                _id={item._id}
                img={item.img}
                name={item.name}
                price={item.price}
                rating={item.rating}
                reviews={item.reviews}
                description={item.description}
                countInStock={item.countInStock}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Main;

// const Main = () => {
//     console.log(Data);
//     return(
//         // Data.map((item) => {
//         //     return(
//                 <Card
//                     key = {Data[0]._id}
//                     // name = {Data[0].name}
//                     img = {Data[0].img}
//                     // rating = {Data[0].rating}
//                     // price = {Data[0].price}
//                 />
//             )
//         // })
//     // )
// }

// export default Main;
