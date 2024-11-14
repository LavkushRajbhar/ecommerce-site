import React, { useState } from 'react'
import Nav from './Com/Nav'
import { BrowserRouter } from 'react-router-dom'
import Rout from './Com/Rout'
import Footer from './Com/Footer'
import Homeproduct from './Com/Home_product'
const App = () => {
  //add to cart

  const [cart, setCart] = useState([]);

  //shop page
  const [shop, setShop] = useState(Homeproduct);
  const [search, setSearch] = useState('')
  //shop category filter
  const Filter = (x) => {
    const cateFilter = Homeproduct.filter((product) => {

      return product.cat === x
    })
    setShop(cateFilter)
  }
  const allCateFilter = () => {
    setShop(Homeproduct);
  }
  // search filter

  const searchLength = (search || []).length === 0
  const searchProduct = () => {
    if (searchLength) {
      alert("Please Search Something !...");
      setShop(Homeproduct);
    } else {

      const searchFilter = Homeproduct.filter((x) => {
        return x.cat === search
      }
      );
      setShop(searchFilter);
    }
  }

  //add to cart 
  const addToCart = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id
    })

    if (exist) {
      alert("This product is already added to the cart")
    }
    else {
      setCart([...cart, { ...product, qty: 1 }])
      alert("This product is now added to the cart");
    }
  }



  return (
    <>
      <BrowserRouter>
        <Nav search={search} setSearch={setSearch} searchProduct={searchProduct} />
        <Rout cart={cart} shop={shop} Filter={Filter} allCateFilter={allCateFilter} addToCart={addToCart} />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App