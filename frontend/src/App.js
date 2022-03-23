import './index.css';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path='product/:id' element={<ProductScreen />} exact />
        </Routes>
      </Router>            
    </>
  );
}

export default App;
