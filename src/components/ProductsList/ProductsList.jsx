import React, { useState } from 'react';
import { products } from '../../data/products';
import ProductCard from '../ProductCard/ProductCard';
const ProductList = () => {
    return (
        <div className="w-full md:w-3/4 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <ProductCard
                        category={product.Category}
                        image={product.ProductImages[0]}
                        link={'#'}
                        oldPrice={product.OldPrice}
                        price={product.Price}
                        title={product.Name}
                    />
                ))}
            </div>
        </div>
    );
};

const ProductsList = () => {
    const [sortBy, setSortBy] = useState('Latest');
    const [filters, setFilters] = useState({
        onSale: false,
        listView: false,
        gridView: true,
        categories: {
            tShirts: false,
            hoodies: false,
            accessories: false
        },
        sizes: {
            s: false,
            m: false,
            l: false
        },
        colors: {
            red: false,
            blue: false,
            green: false
        },
        brands: {
            nike: false,
            adidas: false,
            puma: false
        },
        ratings: {
            fiveStars: false,
            fourStars: false,
            threeStars: false
        }
    });

    // Handle change for checkboxes
    const handleFilterChange = (filterCategory, filterName) => {
        setFilters(prevState => ({
            ...prevState,
            [filterCategory]: {
                ...prevState[filterCategory],
                [filterName]: !prevState[filterCategory][filterName]
            }
        }));
    };

    // Handle sorting change
    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    return (
        <section id="shop">
            <div className="container mx-auto">
                {/* Top Filter */}
                <div className="flex flex-col md:flex-row justify-between items-center py-4">
                    <div className="flex items-center space-x-4">
                        <button
                            className={`bg-primary text-white hover:bg-transparent hover:text-primary border hover:border-primary py-2 px-4 rounded-full focus:outline-none ${filters.onSale ? 'bg-gray-400' : ''}`}
                            onClick={() => setFilters(prevState => ({ ...prevState, onSale: !prevState.onSale }))}
                        >
                            Show On Sale
                        </button>
                        <button
                            className={`bg-primary text-white hover:bg-transparent hover:text-primary border hover:border-primary py-2 px-4 rounded-full focus:outline-none ${filters.listView ? 'bg-gray-400' : ''}`}
                            onClick={() => setFilters(prevState => ({ ...prevState, listView: true, gridView: false }))}
                        >
                            List View
                        </button>
                        <button
                            className={`bg-primary text-white hover:bg-transparent hover:text-primary border hover:border-primary py-2 px-4 rounded-full focus:outline-none ${filters.gridView ? 'bg-gray-400' : ''}`}
                            onClick={() => setFilters(prevState => ({ ...prevState, gridView: true, listView: false }))}
                        >
                            Grid View
                        </button>
                    </div>
                    <div className="flex mt-5 md:mt-0 space-x-4">
                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={handleSortChange}
                                className="block appearance-none w-full bg-white border hover:border-primary px-4 py-2 pr-8 rounded-full shadow leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="Latest">Sort by Latest</option>
                                <option value="Popularity">Sort by Popularity</option>
                                <option value="A-Z">Sort by A-Z</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center px-2">
                                <img id="arrow-down" className="h-4 w-4" src="/assets/images/filter-down-arrow.svg" alt="filter arrow" />
                                <img id="arrow-up" className="h-4 w-4 hidden" src="/assets/images/filter-up-arrow.svg" alt="filter arrow" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block md:hidden text-center mb-4">
                    <button
                        id="products-toggle-filters"
                        className="bg-primary text-white py-2 px-4 rounded-full focus:outline-none"
                    >
                        Show Filters
                    </button>
                </div>

                <div className="flex flex-col md:flex-row">
                    {/* Filters */}
                    <div id="filters" className="w-full md:w-1/4 p-4 hidden md:block">
                        {/* Category Filter */}
                        <div className="mb-6 pb-8 border-b border-gray-line">
                            <h3 className="text-lg font-semibold mb-6">Category</h3>
                            <div className="space-y-2">
                                {['T-Shirts', 'Hoodies', 'Accessories'].map(category => (
                                    <label className="flex items-center" key={category}>
                                        <input
                                            type="checkbox"
                                            className="form-checkbox custom-checkbox"
                                            checked={filters.categories[category.toLowerCase()]}
                                            onChange={() => handleFilterChange('categories', category.toLowerCase())}
                                        />
                                        <span className="ml-2">{category}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Size Filter */}
                        <div className="mb-6 pb-8 border-b border-gray-line">
                            <h3 className="text-lg font-semibold mb-6">Size</h3>
                            <div className="space-y-2">
                                {['S', 'M', 'L'].map(size => (
                                    <label className="flex items-center" key={size}>
                                        <input
                                            type="checkbox"
                                            className="form-checkbox custom-checkbox"
                                            checked={filters.sizes[size.toLowerCase()]}
                                            onChange={() => handleFilterChange('sizes', size.toLowerCase())}
                                        />
                                        <span className="ml-2">{size}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Color Filter */}
                        <div className="mb-6 pb-8 border-b border-gray-line">
                            <h3 className="text-lg font-semibold mb-6">Color</h3>
                            <div className="space-y-2">
                                {['Red', 'Blue', 'Green'].map(color => (
                                    <label className="flex items-center custom-color-checkbox" key={color} data-color={`#${color.toLowerCase()}`}>
                                        <input
                                            type="checkbox"
                                            className="form-checkbox custom-checkbox"
                                            checked={filters.colors[color.toLowerCase()]}
                                            onChange={() => handleFilterChange('colors', color.toLowerCase())}
                                        />
                                        <span className="ml-2">{color}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Brand Filter */}
                        <div className="mb-6 pb-8 border-b border-gray-line">
                            <h3 className="text-lg font-semibold mb-6">Brand</h3>
                            <div className="space-y-2">
                                {['Nike', 'Adidas', 'Puma'].map(brand => (
                                    <label className="flex items-center" key={brand}>
                                        <input
                                            type="checkbox"
                                            className="form-checkbox custom-checkbox"
                                            checked={filters.brands[brand.toLowerCase()]}
                                            onChange={() => handleFilterChange('brands', brand.toLowerCase())}
                                        />
                                        <span className="ml-2">{brand}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Rating Filter */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-6">Rating</h3>
                            <div className="space-y-2">
                                {['★★★★★', '★★★★☆', '★★★☆☆'].map(rating => (
                                    <label className="flex items-center" key={rating}>
                                        <input
                                            type="checkbox"
                                            className="form-checkbox custom-checkbox"
                                            checked={filters.ratings[rating.replace(/[☆]/g, '')]}
                                            onChange={() => handleFilterChange('ratings', rating.replace(/[☆]/g, ''))}
                                        />
                                        <span className="ml-2">{rating}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                    <ProductList />
                </div>
            </div>
        </section>
    );
};

export default ProductsList;




