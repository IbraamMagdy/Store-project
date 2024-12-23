import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from './blog_Data';
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Feature from '../shop/Feature'
import Footer from '../home/Footer'
import './BlogStyle.css';

const BlogPost = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const [post, setPost] = useState(null); // State to hold the post data

  useEffect(() => {
    const foundPost = blogPosts.find((p) => p.id === parseInt(id));
    setPost(foundPost || null);
  }, [id]);

  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <div>
      <Navbar/>
      <div className="blog-post-details">
        <div className='blog-link'>
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            <p>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</p>
            <Link className="nav-link" to="/blog">Blog</Link>
            <p>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</p>
            <Link className="nav-link" to="/post/:id">{ post.title }</Link>
        </div>
        <img
          src={require(`./postsImages/${post.image}`)}
          alt={post.title}
          className="blog-post-details-blog-post-image"
        />
        <div className="blog-post-subcontent">
          <img src={require('../image/user.png')} alt="publisher" />
          <p>{post.publisher}</p>
          <img src={require('../image/date.png')} alt="date" />
          <p>{post.date}</p>
          <img src={require('../image/mark.png')} alt="category" />
          <p>{post.category}</p>
        </div>
        <div className="blog-post-content">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      </div>
      <Feature/>
      <Footer/>
    </div>
  );
};

export default BlogPost;
