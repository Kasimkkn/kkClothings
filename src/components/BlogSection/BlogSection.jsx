import React from 'react';

// Import images
import fashionTrends from '../../assets/images/fashion-trends.jpg';
import stylingTips from '../../assets/images/stylisng-tips.jpg';
import customerStories from '../../assets/images/customer-stories.jpg';

const BlogSection = () => {
    return (
        <section className="py-16">
            <div className="text-center mb-12 lg:mb-20">
                <h2 className="text-5xl font-bold mb-4">
                    Discover <span className="text-primary">Our</span> Blog
                </h2>
                <p className="my-7">Stay updated with the latest trends, tips, and stories in the world of fashion</p>
            </div>

            <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
                <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
                    {/* Blog Post 1 */}
                    <div className="flex flex-col p-6 bg-white rounded-xl shadow-lg">
                        <img className="object-cover object-center w-full mb-8 rounded-xl" src={fashionTrends} alt="Fashion Trends" />
                        <h2 className="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">Fashion Trends</h2>
                        <h1 className="mb-4 text-2xl font-semibold leading-none tracking-tighter text-gray-dark lg:text-3xl">
                            Latest Shirt Trends for 2024
                        </h1>
                        <p className="flex-grow text-base font-medium leading-relaxed text-gray-txt">
                            Explore the hottest shirt trends of 2024. From bold prints to classic styles, stay ahead of the fashion curve with our expert insights.
                        </p>
                        <div className="mt-8">
                            <a
                                href="#"
                                className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full"
                            >
                                Read more
                            </a>
                        </div>
                    </div>

                    {/* Blog Post 2 */}
                    <div className="flex flex-col p-6 bg-white rounded-xl shadow-lg">
                        <img className="object-cover object-center w-full mb-8 rounded-xl" src={stylingTips} alt="Styling Tips" />
                        <h2 className="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">Styling Tips</h2>
                        <h1 className="mb-4 text-2xl font-semibold leading-none tracking-tighter text-gray-dark lg:text-3xl">
                            How to Style Your Shirt for Any Occasion
                        </h1>
                        <p className="flex-grow text-base font-medium leading-relaxed text-gray-txt">
                            Learn how to style your shirt for different occasions, whether it's a casual day out or a formal event. Get tips from fashion experts.
                        </p>
                        <div className="mt-8">
                            <a
                                href="#"
                                className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full"
                            >
                                Read more
                            </a>
                        </div>
                    </div>

                    {/* Blog Post 3 */}
                    <div className="flex flex-col p-6 bg-white rounded-xl shadow-lg">
                        <img className="object-cover object-center w-full mb-8 rounded-xl" src={customerStories} alt="Customer Stories" />
                        <h2 className="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">Customer Stories</h2>
                        <h1 className="mb-4 text-2xl font-semibold leading-none tracking-tighter text-gray-dark lg:text-3xl">
                            Real Stories from Our Happy Customers
                        </h1>
                        <p className="flex-grow text-base font-medium leading-relaxed text-gray-txt">
                            Read about the experiences of our customers. Discover how our shirts have made a difference in their lives and their personal style.
                        </p>
                        <div className="mt-8">
                            <a
                                href="#"
                                className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full"
                            >
                                Read more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
