import "./index.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import {
  BrowserRouter, //as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
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
        </Switch>
      </BrowserRouter>
    </> 
  );
}

export default App;

// "react-router-dom": "^6.2.1",
// "react-router-dom": "^5.3.0",
