import { NavLink } from "react-router-dom";
import Rating from "./Rating";


const Card = (props) => {
    // const product = props;
    // console.log(props);
    // console.log(props._id);
  return (
    <div className="card">
      <NavLink to={`/product/${props._id}`}>
        <img className="medium" src={props.img} alt={"product"} />
      </NavLink>
      <div className="card-body">
        <NavLink to={`/product/${props._id}`}>
          <h2>{props.name}</h2>
        </NavLink>

        <Rating rating={props.rating} reviews={props.reviews}></Rating>

        <div className="price">{`${props.price}/-`}</div>
      </div>
    </div>
  );
};

export default Card;
