import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    return(
        <header className="row">
            <div>
                <Link className="brand" to="/">Cake-Online</Link>
            </div>
            <div>
                <Link to="/cart">
                Cart
                {
                    cartItems.length > 0 && (
                        <span className="badge">{ cartItems.length }</span>
                    )
                }
                </Link>
                <Link to="/signin">Sign In</Link>
            </div>
        </header>
    );
}

export default Header;