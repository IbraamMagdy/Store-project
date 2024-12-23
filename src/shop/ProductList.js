import React, { useState, useEffect } from 'react';
import { useLocation } from'react-router-dom';
import axios from 'axios';
import ProductCard from './ProductCard';
import ShopHeader from './ShopHeader';
import './ShopStyle.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);  // This is where the default 8 products are set
  const [sortOption, setSortOption] = useState('');
  const location = useLocation();
  const [categoryFilter, setCategoryFilter] = useState(
    location.state?.filterCategory || 'all'
  );
  const [viewMode, setViewMode] = useState('grid');  // Default view mode is grid

  useEffect(() => {
    // Fetch products from the API
    axios.get('https://dummyjson.com/products')
      .then(res => {
        setProducts(res.data.products);
        setFilteredProducts(res.data.products);
        const categorySet = new Set(res.data.products.map(product => product.category));
        setCategories(['all', ...Array.from(categorySet)]);
      });
      if (location.state?.filterCategory) {
        setCategoryFilter(location.state.filterCategory);
      }
  
  }, [location.state]);

  useEffect(() => {
    // Apply filtering and sorting, and reset to page 1
    let updatedProducts = [...products];
    
    // Apply category filter
    if (categoryFilter !== 'all') {
      updatedProducts = updatedProducts.filter(product => product.category === categoryFilter);
    }

    // Apply sorting
    if (sortOption === 'nameAsc') {
      updatedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === 'nameDesc') {
      updatedProducts.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortOption === 'priceAsc') {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'priceDesc') {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);

    // Reset page to 1 whenever sorting, category filter, or products per page changes
    setCurrentPage(1);
  }, [categoryFilter, sortOption, products, productsPerPage]);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
  };
  
  // Handle products per page change
  const handleProductsPerPageChange = (number) => {
    setProductsPerPage(number);
  };

  const handleViewToggle = (mode) => {
    setViewMode(mode); // Set the view mode to either 'grid' or 'list'
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div>
      <ShopHeader
        currentPage={currentPage}
        productsPerPage={productsPerPage} // Ensure the header gets the correct productsPerPage value
        totalProducts={filteredProducts.length}
        categories={categories}
        onSortChange={setSortOption}
        onViewToggle={handleViewToggle}
        onProductsPerPageChange={handleProductsPerPageChange}
        onCategoryChange={setCategoryFilter}
        viewMode={viewMode} // Pass the viewMode to ShopHeader
      />

      <ProductCard 
        products={paginatedProducts} // Display the paginated products
        viewMode={viewMode}  // Pass the viewMode to ProductCard
      />

      {/* Pagination controls */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
            <button
            key={index + 1}
            className={`pagination-button ${index + 1 === currentPage ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
            >
            {index + 1}
            </button>
        ))}

        {/* Next button */}
        {currentPage < totalPages && (
            <button
            className="pagination-button next"
            onClick={() => handlePageChange(currentPage + 1)}
            >
            Next
            </button>
        )}
      </div>
    </div>
  );
};

export default ProductList;