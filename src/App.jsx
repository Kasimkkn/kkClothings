import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import ProductsDetails from './pages/ProductsDetails/ProductsDetails'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductsDetails />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App