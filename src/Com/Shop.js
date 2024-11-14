import React from 'react'
import './Shop.css'
import { AiFillEye, AiFillHeart } from "react-icons/ai";
const Shop = ({ shop,Filter, allCateFilter, addToCart }) => {
    return (
        <>
            <div className="shop">
                <h2># Shop</h2>
                <p>Home . shop</p>
                <div className="container">
                    <div className="left_box">
                        <div className="category">
                            <div className="header">
                                <h3>All Categories</h3>
                            </div>
                            <div className="box">
                                <ul>
                                    <li onClick={()=>allCateFilter('')}># All</li>
                                    <li onClick={()=>Filter("tv")}># Tv</li>
                                    <li onClick={()=>Filter("laptop")}># Laptop</li>
                                    <li onClick={()=>Filter("watch")}># Watch</li>
                                    <li onClick={()=>Filter("speaker")}># Speaker</li>
                                    <li onClick={()=>Filter("electronics")}># Electonics</li>
                                    <li onClick={()=>Filter("headphone")}># Headphone</li>
                                    <li onClick={()=>Filter("phone")}># Phone</li>
                                </ul>
                            </div>
                        </div>
                        <div className="banner">
                            <div className="img_box">
                                <img src="image/shop_left.avif" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="right_box">
                        <div className="banner">
                            <div className="img_box">
                                <img src="image/shop_top.webp" alt="" />
                            </div>
                        </div>
                        <div className="product_box">
                            <h2>Shop Products</h2>
                            <div className="product_container">
                                {
                                    shop.map((curElm) => {
                                        return (
                                            <>
                                                <div className="box">
                                                    <div className="img_box">
                                                        <img src={curElm.image} alt="" />
                                                        <div className="icon">
                                                            <li>      <AiFillHeart /></li>
                                                            <li> <AiFillEye /></li>
                                                        </div>
                                                    </div>
                                                    <div className="detail">
                                                        
                                                        <h3>{curElm.Name}</h3>
                                                        <p><span>&#8377;</span> {curElm.price}</p>
                                                        <button onClick={()=>addToCart(curElm)}>Add to Cart </button>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop