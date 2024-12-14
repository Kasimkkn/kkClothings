import React from 'react';
import { Link } from 'react-router-dom';
import cartSvg from '../../assets/images/cart-shopping.svg';
import p1 from '../../assets/images/single-product/1.jpg';
import p2 from '../../assets/images/single-product/2.jpg';
const CartDropdown = () => {
    return (
        <div className="relative group cart-wrapper">
            <Link to="/cart">
                <img src={cartSvg} alt="Cart" className="h-6 w-6 group-hover:scale-120" />
            </Link>
            <div className="absolute right-0 mt-1 w-80 bg-white shadow-lg p-4 rounded hidden group-hover:block">
                <div className="space-y-4">
                    {/* Example product items */}
                    <div className="flex items-center justify-between pb-4 border-b border-gray-line">
                        <div className="flex items-center">
                            <img src={p1} alt="Product" className="h-12 w-12 object-cover rounded mr-2" />
                            <div>
                                <p className="font-semibold">Summer black dress</p>
                                <p className="text-sm">Quantity: 1</p>
                            </div>
                        </div>
                        <p className="font-semibold">$25.00</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={p2} alt="Product" className="h-12 w-12 object-cover rounded mr-2" />
                            <div>
                                <p className="font-semibold">Black suit</p>
                                <p className="text-sm">Quantity: 1</p>
                            </div>
                        </div>
                        <p className="font-semibold">$125.00</p>
                    </div>
                </div>
                <Link to="/cart" className="block text-center mt-4 border border-primary bg-primary hover:bg-transparent text-white hover:text-primary py-2 rounded-full font-semibold">Go to Cart</Link>
            </div>
        </div>
    );
};

export default CartDropdown;
