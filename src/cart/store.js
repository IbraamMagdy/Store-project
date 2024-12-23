import { combineReducers } from "redux";
import cartReducer from "./cartListSlice"; // استيراد cartReducer من cartSlice.js
// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from '../favorites/favoritesSlice';  // Import the new favorites slice

const store = configureStore({
  reducer: combineReducers({
    cart: cartReducer ,
    favorites: favoritesReducer,
  })
});

export default store;