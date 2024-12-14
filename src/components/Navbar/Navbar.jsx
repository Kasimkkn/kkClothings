import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import CartDropdown from '../CartDropdown/CartDropdown';
const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-gray-dark sticky top-0 z-50 font-manrope">
            <div className="flex justify-between items-center py-4 px-10">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="Logo" className="h-14 w-auto mr-4" />
                </Link>
                <div className="flex lg:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

                {/* Center section: Menu */}
                <nav className="hidden lg:flex md:flex-grow justify-center">
                    <ul className="flex justify-center space-x-4 text-xl text-white">
                        <li><Link to="/" className="hover:text-secondary font-semibold">Home</Link></li>
                        <li><Link to="/products" className="hover:text-secondary font-semibold">Shop</Link></li>
                        <li><Link to="/products/:id" className="hover:text-secondary font-semibold">Product Details</Link></li>
                    </ul>
                </nav>

                {/* Right section: Buttons (for desktop) */}
                <div className="hidden lg:flex items-center space-x-4 relative">
                    <CartDropdown />
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <nav className="mobile-menu flex flex-col items-center space-y-8 lg:hidden p-5 fixed bg-gray-dark w-full h-full overflow-hidden">
                    <ul className="w-full text-white text-xl font-manrope flex flex-col items-center">
                        <li><Link to="/" className="hover:text-secondary font-bold block py-2">Home</Link></li>
                        <li><Link to="/products" className="hover:text-secondary font-bold block py-2">Shop</Link></li>
                        <li><Link to="/products/:id" className="hover:text-secondary font-bold block py-2">Product Details</Link></li>
                        <li><Link to="/cart" className="hover:text-secondary font-bold block py-2">Cart</Link></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Navbar;
