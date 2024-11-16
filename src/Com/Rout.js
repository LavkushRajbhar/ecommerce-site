import React from 'react'
import { Routes, Route } from 'react-router'
import Shop from './Shop'
import Home from './Home'
import Cart from './Cart'
import Contact from './Contact'
const Rout = ({ shop, Filter, allCateFilter, addToCart, cart, setCart }) => {
  return (
    <>
      <Routes >
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path='cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='shop' element={<Shop shop={shop} Filter={Filter} allCateFilter={allCateFilter} addToCart={addToCart} />} />
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  )
}

export default Rout