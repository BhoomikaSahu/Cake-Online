import "./index.css";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import {
  Route,
  Switch,
  HashRouter,
} from "react-router-dom";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PrivateRoute from "./components/PrivateRoute";
import DashboardScreen from "./screens/DashboardScreen";
import ProductListScreen from "./screens/ProductListScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/signin" component={SigninScreen} exact />
          <Route path="/register" component={RegisterScreen} exact />
          <Route path="/shipping" component={ShippingAddressScreen} exact />
          <Route path="/payment" component={PaymentMethodScreen} exact />
          <Route path="/placeorder" component={PlaceOrderScreen} exact />
          <Route path="/order/:id" component={OrderScreen} exact />
          <Route path="/orderhistory" component={OrderHistoryScreen} exact />
          <PrivateRoute path="/profile" component={ProfileScreen} exact />
          <Route path="/dashboard" component={DashboardScreen} exact />
          <Route path="/productlist" component={ProductListScreen} exact />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
