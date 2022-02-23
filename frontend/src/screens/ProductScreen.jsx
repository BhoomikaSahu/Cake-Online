import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Data from '../Data'

const Product = () => {
    const {id} = useParams()
    // console.log(params);
    // const key = Data.id;
    const product = Data.find(item => item.id === Number(id))
    console.log(Data);
    console.log(product);
    return (
        <>

            <h1>Product ID: {id} {product.brand} </h1>
            <img src={product.img} alt="" />
            
        </>
    );
}
export default Product;