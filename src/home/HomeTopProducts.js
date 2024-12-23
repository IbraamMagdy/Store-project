import React from 'react'
import RelatedProducts from '../productDetails/RelatedProducts'

const HomeTopProducts = () => {
  return (
    <div className='HomeTopProductsb'>
      <h1>Top Picks For You</h1>
      <h5>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</h5>
      <RelatedProducts category={"furniture"} />
    </div>
  )
}

export default HomeTopProducts
