import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Only import Autoplay module
import slide1 from '../../assets/images/main-slider/5.jpg';
import slide2 from '../../assets/images/main-slider/2.png';
import slide3 from '../../assets/images/main-slider/4.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'; // Include only Autoplay styles

// Slider Data
const sliderData = [
    {
        id: 1,
        image: slide1,
        title: 'Women',
        description: 'Experience the best in sportswear with our latest collection.',
        buttonText: 'Shop now',
        buttonLink: '/',
    },
    {
        id: 2,
        image: slide2,
        title: 'Men',
        description: "Discover the latest trends in Men's sportswear and casual fashion.",
        buttonText: 'Shop now',
        buttonLink: '/',
    },
    {
        id: 3,
        image: slide3,
        title: 'Accessories',
        description: 'Elevate your style with our latest sportswear collection.',
        buttonText: 'Shop now',
        buttonLink: '/',
    },
];

const Slider = () => {
    return (
        <section id="product-slider" className="relative">
            <Swiper
                modules={[Autoplay]} // Only Autoplay module
                autoplay={{ delay: 3000 }}
                loop={true}
                className="main-slider"
            >
                {sliderData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-[60vh] md:h-[50vh] lg:h-[65vh]">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-start p-8 bg-gradient-to-b from-black/40 to-transparent">
                                <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-2 md:mb-4">
                                    {slide.title}
                                </h2>
                                <p className="mb-4 text-white md:text-xl lg:text-2xl">
                                    {slide.description}
                                </p>
                                <a
                                    href={slide.buttonLink}
                                    className="bg-primary hover:bg-transparent text-white hover:text-white border border-transparent hover:border-white font-semibold px-4 py-2 rounded-full"
                                >
                                    {slide.buttonText}
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Slider;
