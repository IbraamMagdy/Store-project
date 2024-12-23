import React from 'react'
import Navbar from '../navbar/Navbar'
import OrderNow from './OrderNow'
import CategoriesSides from './CategoriesSides'
import HomeTopProduct from './HomeTopProducts'
import Instagram from './Instagram'
import Footer from './Footer'

const Home = () => {
  const productId = 12;
  return (
    <div>
      <Navbar/>
      <OrderNow productId={productId} />
      <CategoriesSides/>
      <HomeTopProduct/>
      <Instagram/>
      <Footer/>
    </div>
  )
}

export default Home
