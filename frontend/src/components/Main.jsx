import { useEffect } from "react";
import Card from "./Card";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

const Main = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  
  if (loading) {
    return <LoadingBox />;
  } else if (error) {
    return <MessageBox variant="danger">{error}</MessageBox>;
  }
  return (
    <>
      <div className="main">
        <div className="row center">
          {products.map((item) => {
            return (
              <Card
                key={item._id}
                _id={item._id}
                imgUrl={item.imgUrl}
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