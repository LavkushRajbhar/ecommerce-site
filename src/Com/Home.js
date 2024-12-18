import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import Homeproduct from './Home_product';
import { AiFillEye, AiFillHeart , AiOutlineShoppingCart} from "react-icons/ai";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";

const Home = ({ addToCart }) => {

    // product category
    const [newProduct, setNewProduct] = useState([])
    const [featuredProduct, setFeaturedProduct] = useState([])
    const [bestSellerProduct, setBestSellerProduct] = useState([])

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
    //product type
    useEffect(() => {
        productCategory();
    },[])
    const productCategory = () => {
        //NEW product
        const newCategory = Homeproduct.filter((x) => {
            return x.type === 'new';
        })

        setNewProduct(newCategory);

        
        //Featured product
        const featuredCategory=Homeproduct.filter((x)=>{
            return x.type === 'featured';
        })
        setFeaturedProduct(featuredCategory);


        //best seller product

        const bestSellerCategory = Homeproduct.filter((x) => {
            return x.type === 'bestseller'
        });
        setBestSellerProduct(bestSellerCategory);
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
                                                            <button className='btn' onClick={()=>addToCart(curElm)}> Add to cart</button>
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
                <div className="banners">
                    <div className="container">
                        <div className="left_box">

                            <img src="/image/Multi-Banner-1.avif" alt="banner 1" />

                            <img src="/image/Multi-Banner-2.avif" alt="banner 2" />

                        </div>
                        <div className="right_box">
                            <div className="top">
                                <img src="/image/Multi-Banner-3.webp" alt="banner 3" />
                                <img src="/image/Multi-Banner-4.avif" alt="banner 4" />
                            </div>
                            <div className="bottom">
                                <div className="box">
                                    <img src="/image/Multi-Banner-5.webp" alt="banner 5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product_type">
                    <div className="container">
                        <div className="box"> 
                            <div className="header">
                                <h2>New Product</h2>
                            </div>
                            {
                            
                                newProduct.map((curElm) => {
                                    return (
                                    
                                            <div className="productbox">
                                                <div className="img-box">
                                                    <img src={curElm.image} alt="" />
                                            </div>
                                            <div className="detail">
                                                <h3>{curElm.Name}</h3>
                                                <p>&#8377;{curElm.price}</p>
                                                <div className="icon">
                                                    <button><AiFillEye />
                                                    </button>
                                                    <button>    <AiFillHeart />
                                                    </button>
                                                    <button onClick={() => addToCart(curElm)}><AiOutlineShoppingCart />
                                                    </button>
                                                </div>
                                            </div>
                                            </div>
                                        
                                    );
                                })
                            } 
                        </div>
                        <div className="box"> 
                            <div className="header">
                                <h2>Featured Product</h2>
                            </div>
                            {
                            
                                featuredProduct.map((curElm) => {
                                    return (
                                    
                                            <div className="productbox">
                                                <div className="img-box">
                                                    <img src={curElm.image} alt="" />
                                            </div>
                                            <div className="detail">
                                                <h3>{curElm.Name}</h3>
                                                <p>&#8377;{curElm.price}</p>
                                                <div className="icon">
                                                    <button><AiFillEye />
                                                    </button>
                                                    <button>    <AiFillHeart />
                                                    </button>
                                                    <button onClick={() => addToCart(curElm)}><AiOutlineShoppingCart />
                                                    </button>
                                                </div>
                                            </div>
                                            </div>
                                        
                                    );
                                })
                            } 
                        </div>
                        <div className="box"> 
                            <div className="header">
                                <h2>BestSeller Product</h2>
                            </div>
                            {
                            
                                bestSellerProduct.map((curElm) => {
                                    return (
                                    
                                            <div className="productbox">
                                                <div className="img-box">
                                                    <img src={curElm.image} alt="" />
                                            </div>
                                            <div className="detail">
                                                <h3>{curElm.Name}</h3>
                                                <p>&#8377;{curElm.price}</p>
                                                <div className="icon">
                                                    <button><AiFillEye />
                                                    </button>
                                                    <button>    <AiFillHeart />
                                                    </button>
                                                    <button onClick={() => addToCart(curElm)}><AiOutlineShoppingCart />
                                                    </button>
                                                </div>
                                            </div>
                                            </div>
                                        
                                    );
                                })
                            } 
                        </div>
                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home