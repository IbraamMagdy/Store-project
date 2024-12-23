import React from 'react'
import { Link } from 'react-router-dom'
import './BlogStyle.css'

const BlogBody = () => {
  return (
      <div className='imagebar'>
        <div className='imagebarData'>
            <div className='logo'>
                <img src={require('../image/logo.png')} alt="logo" />
            </div>
            <h1>Blog</h1>
            <div className='link'>
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                <p>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</p>
                <Link className="nav-link" to="/blog">Blog</Link>
            </div>
        </div>
      </div>
  )
}

export default BlogBody
