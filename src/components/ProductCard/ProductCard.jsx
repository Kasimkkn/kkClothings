import React from 'react'

const ProductCard = ({ image, title, category, price, oldPrice, link }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <img src={image} alt={title} className="w-full object-cover mb-4 rounded-lg" />
            <a href={link} className="text-lg font-semibold mb-2">{title}</a>
            <p className="my-2">{category}</p>
            <div className="flex items-center mb-4">
                <span className="text-lg font-bold text-primary">{price}</span>
                {oldPrice && <span className="text-sm line-through ml-2">{oldPrice}</span>}
            </div>
            <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full">
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard