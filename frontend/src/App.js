import "./index.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import {
  BrowserRouter, //as Router,
  Routes,
  Route,
  Switch,
  Router,
} from "react-router-dom";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
// import Switch from 'react-router/Switch'
function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path='product/:id' element={<ProductScreen/>} exact />
        </Routes>
      </Router>             */}

      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomeScreen} exact/>
          <Route path="/cart/:id?" component={CartScreen}/>
          <Route path="/product/:id" component={ProductScreen}/>
          <Route path="/signin" component={SigninScreen} exact/> 
          <Route path="/register" component={RegisterScreen} exact/> 
          <Route path="/shipping" component={ShippingAddressScreen} exact />
          <Route path="/payment" component={PaymentMethodScreen} exact />
          <Route path="/placeorder" component={PlaceOrderScreen} exact />
          <Route path="/order/:id" component={OrderScreen} exact />
        </Switch>
      </BrowserRouter>
    </> 
  );
}

export default App;

// "react-router-dom": "^6.2.1",
// "react-router-dom": "^5.3.0",
