import React from 'react';
import Home from '../components/pages/Home';
import Product from '../components/pages/Product';
import ProductDetail from '../components/pages/ProductDetail';
import Reviews from '../components/pages/Reviews';
import Checkout from '../components/pages/Checkout';
import Login from '../components/pages/Login';
import { Routes, Route } from 'react-router-dom';

function Router() {
  return (
    <Routes>
      <Route path="home" element={<Home />}></Route>
      <Route path="product" element={<Product />}></Route>
      <Route path="product/:productId" element={<ProductDetail />}></Route>
      <Route path="reviews" element={<Reviews />}></Route>
      <Route path="checkout" element={<Checkout />}></Route>
      <Route path="login" element={<Login />}></Route>
    </Routes>
  );
}

export default Router;
