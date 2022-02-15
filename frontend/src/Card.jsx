// const Card = (prop) => {
//     return(
//         <>
//             <div>
//                 <img src={prop.img} alt="" />
//                 <h1>{prop.brand}</h1>
//                 <div>{prop.price}</div>
//             </div>
//         </>
//     )
// }

// export default Card;

const Card = (props) => {
    console.log(props);

    return(
                <div className="card">
                    <a href="product.html">
                        <img className="medium" src={props.img} alt={"product"} />
                    </a>
                    <div className="card-body">
                        <a href="product.html">
                            <h2>{props.brand}</h2>
                        </a> 
                        <div className="rating">
                            <span>
                                <i className="fa fa-star"></i>
                            </span>
                            <span>
                                <i className="fa fa-star"></i>
                            </span>
                            <span>
                                <i className="fa fa-star"></i>
                            </span>
                            <span>
                                <i className="fa fa-star"></i>
                            </span>
                        </div>
                        <div className="price">
                            {props.price}
                        </div>
                    </div>
                </div>
                
    );
}

export default Card;