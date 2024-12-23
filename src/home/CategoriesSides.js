import React from 'react'
import { useNavigate } from'react-router-dom';

const CategoriesSides = () => {
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
      navigate('/shop', { state: { filterCategory: category } });
    };
  
    return (
      <div className="categories-sides">
        <div className="category">
          <img
            src={require('../image/fragrances2.png')}
            alt="Fragrances"
            className="category-image"
          />
          <h3>Fragrances</h3>
          <button className='viewMoreLink' onClick={() => handleCategoryClick('fragrances')}>
            View More
          </button>
        </div>
  
        <div className="category">
          <img
            src={require('../image/beauty.png')}
            alt="Beauty"
            className="category-image"
          />
          <h3>Beauty</h3>
          <button className='viewMoreLink' onClick={() => handleCategoryClick('beauty')}>
            View More
          </button>
        </div>
      </div>
    );
  };
  
export default CategoriesSides
