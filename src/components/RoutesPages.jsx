import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Cart from '../pages/Cart';
import Details from '../pages/Details';


import Products from '../pages/products';
export default function RoutesPages() {
  return (
    <div>
      <Routes >

        <Route path='/' exact element={<Products />} />
        <Route path='/cart' exact element={<Cart />} />
        <Route>404 Not Found!</Route>
        <Route path="/products/:id" exact element={<Details />} />
        </Routes>
    </div>
  )
}
