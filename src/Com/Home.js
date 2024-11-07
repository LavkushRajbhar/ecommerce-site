import React, { useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import Homeproduct from './Home_product';
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";

const Home = () => {
    const [trendingProduct, setTrendingProduct] = useState(Homeproduct);
    // filter of trending product
    const filterCate = (x) => {
        const filterProduct = Homeproduct.filter((curElm) => {
            return curElm.type === x;
        })
        setTrendingProduct(filterProduct)
    }
    // All Trending Product

    const allTrendingProduct = () => {
        setTrendingProduct(Homeproduct);
    }

    return (
        <>
            <div className="home">
                <div className="top_banner">
                    <div className="content">
                        <h3>Silver Aluminium</h3>
                        <h2>Apple Watch</h2>
                        <p>30% off at your first purchase</p>
                        <Link to="/shop" className="link">Shop Now</Link>
                    </div>
                </div>
                <div className="trending">
                    <div className="container">
                        <div className="left_box">
                            <div className="header">
                                <div className="heading">
                                    <h2 onClick={() => allTrendingProduct()}>Trending Product</h2>
                                </div>
                                <div className="cate">
                                    <h3 onClick={() => {
                                        filterCate('new')
                                    }}>New</h3>
                                    <h3 onClick={() => {
                                        filterCate('featured')
                                    }}>Featured</h3>
                                    <h3 onClick={() => {
                                        filterCate('bestseller')
                                    }}>Bestseller</h3>
                                </div>
                            </div>
                            <div className="products">
                                <div className="container">
                                    {
                                        trendingProduct.map((curElm) => {

                                            return (
                                                <>
                                                    <div className="box">
                                                        <div className="img_box">
                                                            <img src={curElm.image} alt="" />
                                                            <div className="icon">
                                                                <div className="icon_box">
                                                                    <AiFillEye />
                                                                </div>
                                                                <div className="icon_box">
                                                                    <AiFillHeart />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="info">
                                                            <h3>{curElm.Name}</h3>
                                                            <p>&#8377;
                                                                {curElm.price}</p>
                                                            <button className='btn'> Add to cart</button>
                                                        </div>
                                                    </div>
                                                </>

                                            )
                                        })
                                    }
                                </div>
                                <button className='show'>Show More</button>
                            </div>
                        </div>

                        <div className="right-box">
                            <div className="right-container">
                                <div className="testimonial">
                                    <div className="head">
                                        <h3>Our Testimonial</h3>

                                    </div>
                                    <div className="details">
                                        <div className="img_box">
                                            <img src="image/T1.avif" alt="testimonial" />
                                        </div>
                                        <div className="info">
                                            <h3>Stephen Robot</h3>
                                            <h4> Web Designer</h4>
                                            <p>
                                                I have been using Silver Aluminium for a few months now and I absolutely love it.
                                                {/* The watch is stunning, and the battery life is amazing. It's also easy to use and has a good grip. I highly recommend this watch to anyone looking for a stylish and unique watch.
      */}
                                            </p>
                                        </div>
                                    </div>
                                <div className="newsletter">
                                    <div className="head">
                                        <h3>Newsletter</h3>
                                    </div>
                                    <div className="form">
                                        <p>Join our Mail</p>
                                        <input type="email" placeholder="Enter your email" autoComplete="off" />
                                        <button>Subscribe</button>
                                        <div className="icon_box">
                                            <div className="icon">
                                                <BiLogoFacebook />
                                            </div>
                                            <div className="icon">
                                                <BiLogoTwitter />
                                            </div>
                                            <div className="icon">
                                                <BiLogoInstagram />
                                            </div>
                                            <div className="icon">
                                                <BiLogoYoutube />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        </>
    )
}

export default Home