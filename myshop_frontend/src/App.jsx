import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/users/home/home'
import Layout from './component/layouts';
import ProductDetail from './pages/users/products/product_detail';
import MenProduct from './pages/users/products/men_product';
import WomenProduct from './pages/users/products/women_product';
import KidProduct from './pages/users/products/kid_product';
import RouterCustom from './router';

function App() {

  return (
    <BrowserRouter>
    <RouterCustom />
      {/* <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/men_product" element={<MenProduct />} />
          <Route path="/women_product" element={<WomenProduct />} />
          <Route path="/kid_product" element={<KidProduct />} />
          <Route path="/" element={<Home />} >
          </Route>
        </Route>
      </Routes> */}
    </BrowserRouter>
  );
}

export default App
