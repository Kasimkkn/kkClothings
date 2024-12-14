import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import facebookIcon from "../../assets/images/social_icons/facebook.svg";
import twitterIcon from "../../assets/images/social_icons/twitter.svg";
import instagramIcon from "../../assets/images/social_icons/instagram.svg";
import pinterestIcon from "../../assets/images/social_icons/pinterest.svg";
import youtubeIcon from "../../assets/images/social_icons/youtube.svg";
import paypalIcon from "../../assets/images/social_icons/paypal.svg";
import stripeIcon from "../../assets/images/social_icons/stripe.svg";
import visaIcon from "../../assets/images/social_icons/visa.svg";

const Footer = () => {
    return (
        <footer className="bg-gray-dark text-white">
            {/* Top part */}
            <div className="container mx-auto px-4 py-10">
                <div className="flex flex-wrap -mx-4">
                    {/* Menu 1 */}
                    <div className="w-full sm:w-1/6 px-4 mb-8">
                        <h3 className="text-lg font-semibold mb-4">Shop</h3>
                        <ul>
                            <li><Link to="/shop" className="hover:text-primary">Shop</Link></li>
                            <li><Link to="/product/women" className="hover:text-primary">Women</Link></li>
                            <li><Link to="/product/men" className="hover:text-primary">Men</Link></li>
                            <li><Link to="/product/shoes" className="hover:text-primary">Shoes</Link></li>
                            <li><Link to="/product/accessories" className="hover:text-primary">Accessories</Link></li>
                        </ul>
                    </div>
                    {/* Menu 2 */}
                    <div className="w-full sm:w-1/6 px-4 mb-8">
                        <h3 className="text-lg font-semibold mb-4">Pages</h3>
                        <ul>
                            <li><Link to="/shop" className="hover:text-primary">Shop</Link></li>
                            <li><Link to="/product" className="hover:text-primary">Product</Link></li>
                            <li><Link to="/checkout" className="hover:text-primary">Checkout</Link></li>
                            <li><Link to="/404" className="hover:text-primary">404</Link></li>
                        </ul>
                    </div>
                    {/* Menu 3 */}
                    <div className="w-full sm:w-1/6 px-4 mb-8">
                        <h3 className="text-lg font-semibold mb-4">Account</h3>
                        <ul>
                            <li><Link to="/cart" className="hover:text-primary">Cart</Link></li>
                            <li><Link to="/register" className="hover:text-primary">Registration</Link></li>
                            <li><Link to="/login" className="hover:text-primary">Login</Link></li>
                        </ul>
                    </div>
                    {/* Social Media */}
                    <div className="w-full sm:w-1/6 px-4 mb-8">
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <ul>
                            <li className="flex items-center mb-2">
                                <img src={facebookIcon} alt="Facebook" className="w-4 h-4 transition-transform transform hover:scale-110 mr-2" />
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Facebook</a>
                            </li>
                            <li className="flex items-center mb-2">
                                <img src={twitterIcon} alt="Twitter" className="w-4 h-4 transition-transform transform hover:scale-110 mr-2" />
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Twitter</a>
                            </li>
                            <li className="flex items-center mb-2">
                                <img src={instagramIcon} alt="Instagram" className="w-4 h-4 transition-transform transform hover:scale-110 mr-2" />
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Instagram</a>
                            </li>
                            <li className="flex items-center mb-2">
                                <img src={pinterestIcon} alt="Pinterest" className="w-4 h-4 transition-transform transform hover:scale-110 mr-2" />
                                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Pinterest</a>
                            </li>
                            <li className="flex items-center mb-2">
                                <img src={youtubeIcon} alt="YouTube" className="w-4 h-4 transition-transform transform hover:scale-110 mr-2" />
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">YouTube</a>
                            </li>
                        </ul>
                    </div>
                    {/* Contact Information */}
                    <div className="w-full sm:w-2/6 px-4 mb-8">
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <div>
                            <img src={logo} alt="Logo" className="h-[60px] mb-4 bg-gray-dark rounded" />
                        </div>
                        <p>123 Street Name, Paris, France</p>
                        <p className="text-xl font-bold my-4">Phone: (123) 456-7890</p>
                        <a href="mailto:info@company.com" className="underline">Email: info@company.com</a>
                    </div>
                </div>
            </div>
            {/* Bottom part */}
            <div className="py-6 border-t border-gray-line">
                <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
                    {/* Copyright and Links */}
                    <div className="w-full lg:w-3/4 text-center lg:text-left mb-4 lg:mb-0">
                        <p className="mb-2 font-bold">&copy; 2024 Your Company. All rights reserved.</p>
                        <ul className="flex justify-center lg:justify-start space-x-4 mb-4 lg:mb-0">
                            <li><Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
                            <li><Link to="/terms-of-service" className="hover:text-primary">Terms of Service</Link></li>
                            <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
                        </ul>
                        <p className="text-sm mt-4">
                            Your shop's description goes here. This is a brief introduction to your shop and what you offer.
                        </p>
                    </div>
                    {/* Payment Icons */}
                    <div className="w-full lg:w-1/4 text-center lg:text-right ">
                        <img src={paypalIcon} alt="PayPal" className="inline-block h-8 mr-2" />
                        <img src={stripeIcon} alt="Stripe" className="inline-block h-8 mr-2" />
                        <img src={visaIcon} alt="Visa" className="inline-block h-8" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
