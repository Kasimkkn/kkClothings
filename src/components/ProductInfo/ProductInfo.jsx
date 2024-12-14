import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import facebookIcon from "../../assets/images/social_icons/facebook.svg";
import twitterIcon from "../../assets/images/social_icons/twitter.svg";
import instagramIcon from "../../assets/images/social_icons/instagram.svg";
import pinterestIcon from "../../assets/images/social_icons/pinterest.svg";
import viberIcon from "../../assets/images/social_icons/viber.svg";

const ProductInfo = () => {
    console.log('products', products);
    const [mainImage, setMainImage] = useState(products[0]?.ProductImages[0]);

    // Function to handle image change on click
    const changeImage = (image) => {
        setMainImage(image);
    };

    return (
        <section id="product-info" className="py-6">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2">
                        <div className="grid gap-4">
                            {/* Main Image */}
                            <div id="main-image-container">
                                <img
                                    id="main-image"
                                    className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                                    src={mainImage}
                                    alt="Main Product Image"
                                />
                            </div>
                            {/* Small Images */}
                            <div className="grid grid-cols-5 gap-4">
                                {products[0].ProductImages.map((image, index) => (
                                    <div key={index}>
                                        <img
                                            onClick={() => changeImage(image)}
                                            src={image}
                                            className="object-cover object-center max-h-30 max-w-full rounded-lg cursor-pointer"
                                            alt={`Gallery Image ${index + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Product Details Section */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-between">
                        <div className="pb-8 border-b border-gray-300">
                            <h1 className="text-3xl font-bold mb-4">{products[0]?.Name}</h1>
                            <div className="flex items-center mb-8">
                                <span>{"★".repeat(Math.round(products[0]?.Ratings))}</span>
                                <span className="ml-2">({products[0]?.Reviews} Reviews)</span>
                                <Link to="#" className="ml-4 text-primary font-semibold">Write a review</Link>
                            </div>
                            <div className="mb-4 pb-4 border-b border-gray-300">
                                <p className="mb-2">Brand: <strong><Link to="#" className="hover:text-primary">Nike</Link></strong></p>
                                <p className="mb-2">Product code: <strong>{products[0]?.SKU}</strong></p>
                                <p className="mb-2">Availability: <strong>{products[0]?.Stock > 0 ? "In Stock" : "Out of Stock"}</strong></p>
                            </div>
                            <div className="text-2xl font-semibold mb-8">${products[0]?.Price}</div>

                            {/* Quantity Section */}
                            <div className="flex items-center mb-8">
                                <button className="bg-primary hover:bg-transparent border border-transparent hover:border-primary text-white hover:text-primary font-semibold w-10 h-10 rounded-full flex items-center justify-center focus:outline-none" disabled>-</button>
                                <input type="number" value="1" className="w-16 py-2 text-center focus:outline-none" readOnly />
                                <button className="bg-primary hover:bg-transparent border border-transparent hover:border-primary text-white hover:text-primary font-semibold w-10 h-10 rounded-full focus:outline-none">+</button>
                            </div>

                            {/* Add to Cart Button */}
                            <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full">
                                Add to Cart
                            </button>
                        </div>

                        {/* Social sharing */}
                        <div className="flex space-x-4 my-6">
                            {/* Add social icons */}
                            {[
                                { name: "facebook", icon: facebookIcon },
                                { name: "instagram", icon: instagramIcon },
                                { name: "pinterest", icon: pinterestIcon },
                                { name: "twitter", icon: twitterIcon },
                                { name: "viber", icon: viberIcon }
                            ].map((social, index) => (
                                <a key={index} href="#" className="w-4 h-4 flex items-center justify-center">
                                    <img
                                        src={social.icon}
                                        alt={social.name}
                                        className="w-4 h-4 transition-transform transform hover:scale-110"
                                    />
                                </a>
                            ))}
                        </div>


                        {/* Product Description */}
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Product Description</h3>
                            <p>{products[0]?.Description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductInfo;
