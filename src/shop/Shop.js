import React from 'react'
import Navbar from '../navbar/Navbar'
import ShopBody from './ShopBody'
import Feature from './Feature'
import Footer from '../home/Footer'
import ProductList from './ProductList'


const Shop = () => {
  return (
    <div>
      <Navbar/>
      <ShopBody/>
      <ProductList/>
      <Feature/>
      <Footer/>
    </div>
  )
}

export default Shop
