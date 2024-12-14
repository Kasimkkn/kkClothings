import React, { useState } from 'react';

const ProductTabs = () => {
    const [activeTab, setActiveTab] = useState('description'); // Default active tab

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section>
            <div className="container mx-auto">
                <div className="py-12">
                    <div className="mt-10">
                        <div className="flex space-x-4" role="tablist">
                            <button
                                id="description-tab"
                                role="tab"
                                aria-controls="description-content"
                                aria-selected={activeTab === 'description'}
                                onClick={() => handleTabClick('description')}
                                className={`tab ${activeTab === 'description' ? 'active text-primary' : 'hover:text-primary'}`}
                            >
                                Description
                            </button>
                            <button
                                id="additional-info-tab"
                                role="tab"
                                aria-controls="additional-info-content"
                                aria-selected={activeTab === 'additional-info'}
                                onClick={() => handleTabClick('additional-info')}
                                className={`tab ${activeTab === 'additional-info' ? 'active text-primary' : 'hover:text-primary'}`}
                            >
                                Additional information
                            </button>
                            <button
                                id="size-shape-tab"
                                role="tab"
                                aria-controls="size-shape-content"
                                aria-selected={activeTab === 'size-shape'}
                                onClick={() => handleTabClick('size-shape')}
                                className={`tab ${activeTab === 'size-shape' ? 'active text-primary' : 'hover:text-primary'}`}
                            >
                                Size & Shape
                            </button>
                            <button
                                id="reviews-tab"
                                role="tab"
                                aria-controls="reviews-content"
                                aria-selected={activeTab === 'reviews'}
                                onClick={() => handleTabClick('reviews')}
                                className={`tab ${activeTab === 'reviews' ? 'active text-primary' : 'hover:text-primary'}`}
                            >
                                Reviews (3)
                            </button>
                        </div>
                    </div>
                    <div className="mt-8">
                        {activeTab === 'description' && (
                            <div id="description-content" role="tabpanel" aria-labelledby="description-tab" className="tab-content">
                                {/* Description Content */}
                                <div className="flex flex-col lg:flex-row lg:space-x-8">
                                    <div className="w-full lg:w-1/2">
                                        <h3 className="text-xl font-semibold mb-2">
                                            With the new fashion trends and all the available shopping options...
                                        </h3>
                                        <p className="mb-4">
                                            These days, you can take your own inspiration and create something new for yourself...
                                        </p>
                                    </div>
                                    <div className="w-full lg:w-1/4">
                                        <h3 className="text-xl font-semibold mb-5">Material & Washing</h3>
                                        <p className="mb-2 pb-2 border-b border-gray-line">Material: <span className="font-semibold">100% cotton</span></p>
                                        <p className="mb-2 pb-2 border-b border-gray-line">Fabric: <span className="font-semibold">Soft jersey</span></p>
                                        <p className="mb-2">Care instructions: <span className="font-semibold">Machine wash at 30°C...</span></p>
                                    </div>
                                    <div className="w-full lg:w-1/4">
                                        <h3 className="text-xl font-semibold mb-5">Size & Shape</h3>
                                        <p className="mb-2 pb-2 border-b border-gray-line">Model height: <span className="font-semibold">Our model is 180 cm tall...</span></p>
                                        <p className="mb-2 pb-2 border-b border-gray-line">Fit: <span className="font-semibold">Regular</span></p>
                                        <p className="mb-2 pb-2 border-b border-gray-line">Length: <span className="font-semibold">Standard</span></p>
                                        <p className="mb-2">Sleeve length: <span className="font-semibold">Short sleeves</span></p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'additional-info' && (
                            <div id="additional-info-content" role="tabpanel" aria-labelledby="additional-info-tab" className="tab-content">
                                {/* Additional Information Content */}
                                <p>Additional information about the product.</p>
                                <div className="flex flex-col space-y-8">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Colors</h3>
                                        <p className="text-base text-gray-700">
                                            Available colors:
                                            <a href="#" className="text-primary hover:underline">Red</a>,
                                            <a href="#" className="text-primary hover:underline">Blue</a>,
                                            <a href="#" className="text-primary hover:underline">Green</a>,
                                            <a href="#" className="text-primary hover:underline">Black</a>,
                                            <a href="#" className="text-primary hover:underline">White</a>.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Brand</h3>
                                        <p className="text-base text-gray-700">
                                            This t-shirt is made by <a href="#" className="text-primary hover:underline">Nike</a>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'size-shape' && (
                            <div id="size-shape-content" role="tabpanel" aria-labelledby="size-shape-tab" className="tab-content">
                                {/* Size & Shape Content */}
                                <table className="min-w-full bg-white">
                                    <thead>
                                        <tr>
                                            <th className="px-6 py-3 border-b border-gray-line bg-gray-100 text-left text-xs">Size</th>
                                            <th className="px-6 py-3 border-b border-gray-line bg-gray-100 text-left text-xs">Chest (inches)</th>
                                            <th className="px-6 py-3 border-b border-gray-line bg-gray-100 text-left text-xs">Waist (inches)</th>
                                            <th className="px-6 py-3 border-b border-gray-line bg-gray-100 text-left text-xs">Sleeve Length (inches)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-6 py-4 border-b border-gray-line text-sm">Small</td>
                                            <td className="px-6 py-4 border-b border-gray-line text-sm">34-36</td>
                                            <td className="px-6 py-4 border-b border-gray-line text-sm">28-30</td>
                                            <td className="px-6 py-4 border-b border-gray-line text-sm">32-33</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
                        {activeTab === 'reviews' && (
                            <div id="reviews-content" role="tabpanel" aria-labelledby="reviews-tab" className="tab-content">
                                {/* Reviews Content */}
                                <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
                                <div id="reviews-list">
                                    {/* Review 1 */}
                                    <div className="py-4">
                                        <div className="flex items-center mb-2">
                                            <span className="text-lg font-semibold text-gray-700">John Doe</span>
                                            <span className="ml-2 text-primary">★★★★★</span>
                                        </div>
                                        <p>Great quality! Fits perfectly and the material feels premium. Highly recommend this t-shirt.</p>
                                    </div>
                                    {/* More reviews */}
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
                                    <form id="review-form" className="space-y-4">
                                        <div className="space-y-4 md:flex md:space-x-4 md:space-y-0">
                                            <div className="md:flex-1">
                                                <label htmlFor="review-name" className="block text-sm font-medium text-gray-700">Name</label>
                                                <input type="text" id="review-name" name="review-name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </div >
            </div >
        </section >
    );
};

export default ProductTabs;
