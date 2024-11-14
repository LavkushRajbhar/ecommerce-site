import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom';
const Cart = ({cart}) => {
  return (
      <>
          <div className="cart">
              <h3>#cart</h3>
              {
                  cart.length === 0 && 
                  <>
                      <div className="empty_cart">
                          <h2>Your Shopping cart is Empty.</h2>
                          <Link to='/shop'><button>Shop Now</button></Link>
                          
                  </div>
                  </>
              }
              <div className="container">
                
              </div>
      </div>
      </>
  )
}

export default Cart