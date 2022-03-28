import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header className="row">
            <div>
                <Link className="brand" to="/">Cake-Online</Link>
            </div>
            <div>
                <Link to="/cart">Cart</Link>
                <Link to="/signin">Sign In</Link>
            </div>
        </header>
    );
}

export default Header;