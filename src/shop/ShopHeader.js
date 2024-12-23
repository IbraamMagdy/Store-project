import React, { useState } from 'react';
import './ShopStyle.css';

const ShopHeader = ({
  currentPage,
  productsPerPage,
  totalProducts,
  categories,
  onSortChange,
  onViewToggle,
  onProductsPerPageChange,
  onCategoryChange,
  viewMode
}) => {
  const [filterOpen, setFilterOpen] = useState(false); // State to handle dropdown visibility
  const [categoryFilter, setCategoryFilter] = useState('all'); // Local state for category filter

  const handleViewToggle = (mode) => {
    onViewToggle(mode);  // Notify the parent component (Shop) of the view change
  };

  // Toggle the filter dropdown visibility
  const toggleFilterDropdown = () => {
    setFilterOpen(!filterOpen);
  };

  // Handle filter change and update the parent component (ProductList)
  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setCategoryFilter(newCategory);
    onCategoryChange(newCategory); // Notify the parent component of the category change
  };

  return (
    <div className="shop-header">
      <div className="header-right">
        <div className='rightPart'>
                    {/* Filter Dropdown with Icon */}
        <div className="filter-dropdown">
            <img src={require('../image/Vector.png')} alt="logo" onClick={toggleFilterDropdown} className="filter-icon"/>
            <label>Filter</label>

          <select
            value={categoryFilter}
            onChange={handleCategoryChange}
            className="filter-select"
            style={{ display: filterOpen ? 'block' : 'none' }} // Conditionally show dropdown
          >
            <option value="all">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
         {/* View Toggle Icons */}
         <div className="view-toggle-icons">
          <button
            className={`view-toggle ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => handleViewToggle('grid')}
          >
            <img src={require('../image/ci_grid-big-round.png')} className="view-toggle-icons1" alt="logo" />
          </button>
          <button
            className={`view-toggle ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => handleViewToggle('list')}
          >
            <img src={require('../image/bi_view-list.png')} className="view-toggle-icons2" alt="logo" />
          </button>
          <div className='lineColumn'></div>
        </div>

        <div className="header-left">
          <span className="product-count">
            Showing {Math.min((currentPage - 1) * productsPerPage + 1, totalProducts)} -{" "}
            {Math.min(currentPage * productsPerPage, totalProducts)} of {totalProducts} results
          </span>
        </div>
        </div>

        <div className='leftPart'>
            {/* Products Per Page Dropdown */}
            <div className="products-per-page-dropdown">
                <label>Show</label>
                <select
                    value={productsPerPage} // Set the value of the dropdown to the current productsPerPage
                    onChange={(e) => onProductsPerPageChange(Number(e.target.value))}
                    className="products-per-page-select"
                >
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="16">16</option>
                    <option value="32">32</option>
                    <option value="64">64</option>
                </select>
            </div>
            {/* Sort By Dropdown */}
            <div className="sort-dropdown">
                <label>Sort by</label>
                <select onChange={(e) => onSortChange(e.target.value)} className="sort-select">
                    <option value="">Select</option>
                    <option value="nameAsc">Name - Ascending</option>
                    <option value="nameDesc">Name - Descending</option>
                    <option value="priceAsc">Price - Low to High</option>
                    <option value="priceDesc">Price - High to Low</option>
                </select>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ShopHeader;