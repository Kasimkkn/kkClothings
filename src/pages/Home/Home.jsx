import React from 'react'
import Slider from '../../components/Slider/Slider'
import ProductBanners from '../../components/ProductBanners/ProductBanners'
import PopularProducts from '../../components/PopularProducts/PopularProducts'
import LatestProducts from '../../components/LatestProducts/LatestProducts'
import Brands from '../../components/Brands/Brands'
import BlogSection from '../../components/BlogSection/BlogSection'

const Home = () => {
    return (
        <>
            <Slider />
            <ProductBanners />
            <PopularProducts />
            <LatestProducts />
            <Brands />
            <BlogSection />
        </>
    )
}

export default Home