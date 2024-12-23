import React from 'react'
import { useState } from'react'
import Details from './Details'
import Navbar from '../navbar/Navbar'
import Footer from '../home/Footer'
import DetailsHeader from './DetailsHeader'
import RelatedProducts from './RelatedProducts'
import './ProductDetailsStyle.css'
import ScrollToTop from './ScrollToTop';


const ProductDetails = () => {
  const [productTitle, setProductTitle] = useState('');
  const [category, setCategory] = useState('');


  return (
    <div>
      <ScrollToTop/>
      <Navbar/>
      <DetailsHeader productTitle={productTitle} />
      <Details 
        productTitle={productTitle} 
        onTitleChange={setProductTitle} 
        setCategory={setCategory}
      />
      <div style={{ textAlign: 'center' }}>
        <h2 className='related-products-sectionh2'>Related Products</h2>
        <RelatedProducts category={category} />
      </div>
      <Footer/>
    </div>
  )
}

export default ProductDetails
