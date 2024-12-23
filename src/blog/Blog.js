import React from 'react'
import Navbar from '../navbar/Navbar'
import Feature from '../shop/Feature'
import Footer from '../home/Footer'
import BlogBody from './BlogBody'
import BlogData from './BlogData'

const Blog = () => {
  return (
    <div>
      <Navbar/>
      <BlogBody/>
      <BlogData/>
      <Feature/>
      <Footer/> 
    </div>
  )
}

export default Blog
