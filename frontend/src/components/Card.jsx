import Rating from "./Rating";

const Card = (props) => {
    const product = props;
    console.log(product.reviews);
  return (
    <div className="card">
      <a href="product.html">
        <img className="medium" src={props.img} alt={"product"} />
      </a>
      <div className="card-body">
        <a href="product.html">
          <h2>{props.brand}</h2>
        </a>

        <Rating rating={props.rating} reviews={props.reviews}></Rating>

        <div className="price">{product.price}</div>
      </div>
    </div>
  );
};

export default Card;
