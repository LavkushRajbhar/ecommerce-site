import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";
const Cart = ({ cart, setCart }) => {
    //Increase quantity
    const incQty = (product) => {

        const exist = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((curElm) => {
            return curElm.id === product.id ? { ...exist, qty: exist.qty + 1 } : curElm
        }))
    }

    //Decrease quantity
    const decQty = (product) => {

        const exist = cart.find((x) => {
            return x.id === product.id
        })
        if (exist.qty > 1) {
            setCart(cart.map((curElm) => {
                return curElm.id === product.id ? { ...exist, qty: exist.qty - 1 } : curElm
            }))
        }
    }
    //remove product
    const removeProduct = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        if (exist.qty > 0) {
            setCart(cart.filter((curElm) => {

                return curElm.id !== product.id
            }))
        }
    }

    // Total price
    const total = cart.reduce((price, item) =>
        price + item.qty * item.price, 0
    )

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
                    {
                        cart.map((curElm) => {
                            return (
                                <>
                                    <div className="box">
                                        <div className="img_box">
                                            <img src={curElm.image} alt="" />
                                        </div>
                                        <div className="detail">
                                            <div className="info">
                                                <h4>{curElm.cat}</h4>
                                                <h3>{curElm.Name}</h3>
                                                <p>Price: &#8377; {curElm.price}</p>
                                                {/* <p>Total: &#8377;{curElm.price * curElm.qty}</p> */}
                                            </div>
                                            <div className="quantity">
                                                <button onClick={() => incQty(curElm)}>+</button>
                                                <input type="number" value={curElm.qty} readOnly min="1" />
                                                <button onClick={() => decQty(curElm)}>-</button>
                                            </div>
                                            <div className="icon">
                                                <li onClick={() => removeProduct(curElm)}><AiOutlineClose /></li>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className="bottom">
                    {
                        cart.length > 0 &&
                        <>
                            <div className="total">
                                <h4>Sub Total: &#8377; {total}</h4>
                            </div>
                            <button>Checkout</button>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default Cart