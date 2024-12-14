import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Importing images
import htmlLogo from '../../assets/images/brands/html.svg';
import jsLogo from '../../assets/images/brands/js.svg';
import laravelLogo from '../../assets/images/brands/laravel.svg';
import phpLogo from '../../assets/images/brands/php.svg';
import reactLogo from '../../assets/images/brands/react.svg';
import tailwindLogo from '../../assets/images/brands/tailwind.svg';
import typescriptLogo from '../../assets/images/brands/typescript.svg';

const Brands = () => {
    return (
        <section id="brands" className="bg-white py-16 px-4">
            <div className="container mx-auto max-w-screen-xl px-4">
                <div className="text-center mb-12 lg:mb-20">
                    <h2 className="text-5xl font-bold mb-4">
                        Discover <span className="text-primary">Our Brands</span>
                    </h2>
                    <p className="my-7">Explore the top brands we feature in our store</p>
                </div>

                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    <SwiperSlide className="flex-none bg-gray-200 flex items-center justify-center rounded-md">
                        <img src={htmlLogo} alt="HTML Logo" className="max-h-full max-w-full" />
                    </SwiperSlide>

                    <SwiperSlide className="flex-none bg-gray-200 flex items-center justify-center rounded-md">
                        <img src={jsLogo} alt="JavaScript Logo" className="max-h-full max-w-full" />
                    </SwiperSlide>

                    <SwiperSlide className="flex-none bg-gray-200 flex items-center justify-center rounded-md">
                        <img src={laravelLogo} alt="Laravel Logo" className="max-h-full max-w-full" />
                    </SwiperSlide>

                    <SwiperSlide className="flex-none bg-gray-200 flex items-center justify-center rounded-md">
                        <img src={phpLogo} alt="PHP Logo" className="max-h-full max-w-full" />
                    </SwiperSlide>

                    <SwiperSlide className="flex-none bg-gray-200 flex items-center justify-center rounded-md">
                        <img src={reactLogo} alt="React Logo" className="max-h-full max-w-full" />
                    </SwiperSlide>

                    <SwiperSlide className="flex-none bg-gray-200 flex items-center justify-center rounded-md">
                        <img src={tailwindLogo} alt="Tailwind CSS Logo" className="max-h-full max-w-full" />
                    </SwiperSlide>

                    <SwiperSlide className="flex-none bg-gray-200 flex items-center justify-center rounded-md">
                        <img src={typescriptLogo} alt="TypeScript Logo" className="max-h-full max-w-full" />
                    </SwiperSlide>
                </Swiper>

                {/* Swiper Navigation */}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </section>
    );
};

export default Brands;
