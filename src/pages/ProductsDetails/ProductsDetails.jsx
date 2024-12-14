import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import ProductTabs from '../../components/ProductTabs/ProductTabs';
import LatestProducts from '../../components/LatestProducts/LatestProducts';

const ProductsDetails = () => {
    const breadcrumbs = [
        { name: 'Home', link: '/' },
        { name: 'Shop', link: '/products' },
        { name: 'T-shirts', link: '/shop/t-shirts' },
        { name: 'Preppy T-shirt', link: '' }, // Last breadcrumb doesn't need a link
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <ProductInfo />
            <ProductTabs />
            <LatestProducts />
        </>
    )
}

export default ProductsDetails