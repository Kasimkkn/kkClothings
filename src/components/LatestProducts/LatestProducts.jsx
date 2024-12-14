import React from 'react';
import { products } from '../../data/products';
import ProductCard from '../ProductCard/ProductCard';
const LatestProducts = () => {
    return (
        <section id="latest-products" className="py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-8">Latest products</h2>
                <div className="flex flex-wrap -mx-4">
                    {products.map(product => (
                        <div key={product.id} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                            <ProductCard
                                category={product.Category}
                                image={product.ProductImages[0]}
                                link={'#'}
                                oldPrice={product.OldPrice}
                                price={product.Price}
                                title={product.Name}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestProducts;
