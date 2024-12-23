import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogPosts, categories } from './blog_Data';
import BlogPagination from './BlogPagination';
import './BlogStyle.css';

const BlogData = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;
  const paginatedPosts = paginate(blogPosts, currentPage, pageSize);
  const sortedPosts = blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  const navigate = useNavigate();

  const handlePostClick = (id) => {
    navigate(`/post/${id}`);
  };

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  function paginate(posts, page, pageSize) {
    const startIndex = (page - 1) * pageSize;
    return posts.slice(startIndex, startIndex + pageSize);
  }

  return (
    <div>
      <div className="blog-container">
        <div className="blog-posts">
          {paginatedPosts.map((post) => (
            <div className="blog-post" key={post.id}>
              <img
                src={require(`./postsImages/${post.image}`)}
                alt={post.title}
                className="blog-post-image"
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
                <p>{post.content.substring(0, 333)}...</p>
                <button className='blog-read-more' onClick={() => handlePostClick(post.id)}>Read more</button>
              </div>
            </div>
          ))}
        </div>
        <div className='blog-side'>
          <div className="categories">
            <h2>Categories</h2>
            <ul className="categories-list">
              {categories.map((category, index) => (
                <li key={index}>
                  <p className='categories-list-li-p1'>{category}</p>
                  <p className='categories-list-li-p2'>{blogPosts.filter((post) => post.category === category).length}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="recent-posts">
            <h2>Recent Posts</h2>
            <ul className="recent-posts-list">
              {sortedPosts.slice(0, 5).map((post) => (
                <li key={post.id} className="recent-post-item" onClick={() => handlePostClick(post.id)}>
                  <img
                    src={require(`./postsImages/${post.image}`)}
                    alt={post.title}
                    className="recent-post-image"
                  />
                  <div className="recent-post-details">
                    <h3 className="recent-post-title">{post.title}</h3>
                    <p className="recent-post-date">{post.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <BlogPagination
        totalPages={Math.ceil(blogPosts.length / pageSize)}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default BlogData;
