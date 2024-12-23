import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../home/Footer';
import FavoritesBody from './FavoritesBody';
import FavoritesData from './FavoritesData';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../favorites/favoritesSlice';

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const handleDeleteFavorite = (productId) => {
    console.log(`Attempting to delete product with ID: ${productId}`);
    dispatch(removeFavorite(productId)); // Update Redux state directly
  };

  return (
    <div>
      <Navbar />
      <FavoritesBody />
      <FavoritesData favorites={favorites} onDeleteFavorite={handleDeleteFavorite} />
      <Footer />
    </div>
  );
}

export default Favorites;