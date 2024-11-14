import React from 'react'
import './Footer.css'
import { FaPiggyBank, FaShippingFast,FaHeadphones, FaWallet} from 'react-icons/fa'
const Footer = () => {
  return (
      <>
          <div className="footer">
              <div className="container">
                  <div className="left_box">
                      <div className="box">
                          <div className="icon_box">
                              <FaPiggyBank />
                          </div>
                          <div className="detail">
                              <h3>Great Saving</h3>
                              <p>
                                  10% of your income is saved every month. This means you save more than you earn.
                              </p>
                          </div>
                      </div>
                      <div className="box">
                          <div className="icon_box">
                              <FaShippingFast />
                          </div>
                          <div className="detail">
                              <h3>Free Delivery</h3>
                              <p>
                                  Get free delivery on orders over $100.
                              </p>
                          </div>
                      </div>
                      <div className="box">
                          <div className="icon_box">
                              <FaHeadphones />
                          </div>
                          <div className="detail">
                              <h3>24*7</h3>
                              <p>
                                  We're here to help. Call us at (123) 456-7890.
                              </p>
                          </div>
                      </div>
                      <div className="box">
                          <div className="icon_box">
                              <FaWallet />
                          </div>
                          <div className="detail">
                              <h3>Money Back</h3>
                              <p>
                                  We're here to help. Return your items within 30 days. 100% refund. 100% money back. 100% satisfaction guaranteed.
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="right_box">
                      <div className="header">
                          <img src="image/logo.webp" alt="logo" />
                          <p>
                              © 2021 Your Company. All rights reserved.
                          </p>
                      </div>
                      <div className="bottom">
                          <div className="box">
                              <h3>Your Account</h3>
                              <ul>
                                  <li>About Us</li>
                                  <li>Account</li>
                                  <li>Payment</li>
                                  <li>Sales</li>
                              </ul>
                          </div>
                          <div className="box">
                              <h3>Products</h3>
                              <ul>
                                  <li>Delivery</li>
                                  <li>Track Order</li>
                                  <li>New Product</li>
                                  <li>Old Product</li>
                              </ul>
                          </div>
                          <div className="box">
                              <h3>Contact Us</h3>
                              <ul>
                                  <li>Mira Road</li>
                                  <li>+91 9702258210</li>
                                  <li>info@gmail.com</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
      </div>
      </>
  )
}

export default Footer