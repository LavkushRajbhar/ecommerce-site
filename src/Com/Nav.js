import React from 'react';
import { MdLocalShipping } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

import './Nav.css';

const Nav = ({search,setSearch,searchProduct}) => {
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <header className="header">
            {/* Top Header with Shipping Info */}
            <div className="top-header">
                <div className="icon">
                    <MdLocalShipping />
                </div>
                <p className="info">Free shipping on orders over $1000</p>
            </div>

            {/* Middle Header with Logo, Search Box, and Authentication */}
            <div className="mid-header">
                <div className="logo">
                    <img src="image/logo.webp" alt="logo" />
                </div>
                <div className="search-box">
                    <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button onClick={searchProduct}><AiOutlineSearch /></button>
                </div>

                <div className="user-auth">
                    {isAuthenticated ? (
                        <div className="user">
                            <FiLogOut className="icon" />
                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                        </div>
                    ) : (
                        <div className="user">
                            <FiLogIn className="icon" />
                            <button onClick={() => loginWithRedirect()}>Login</button>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Header with User Profile, Navigation Links, and Offer */}
            <div className="bottom-header">
                <div className="user-profile">
                    <CiUser className="icon" />
                    <div className="info">
                        {isAuthenticated ? (
                            <>
                                <h2>{user.name}</h2>
                                <p>{user.email}</p>
                            </>
                        ) : (
                            <p>Please Login</p>
                        )}
                    </div>
                </div>

                <nav className="nav-links">
                    <ul>
                        <li><Link to="/" className="link">Home</Link></li>
                        <li><Link to="/shop" className="link">Shop</Link></li>
                        <li><Link to="/cart" className="link">Cart</Link></li>
                        <li><Link to="/about" className="link">About</Link></li>
                        <li><Link to="/contact" className="link">Contact</Link></li>
                    </ul>
                </nav>

                <div className="offer">
                    <p>Get 20% off on your first purchase</p>
                </div>
            </div>
        </header>
    );
}

export default Nav;
