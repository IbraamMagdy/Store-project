import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: []
  },
  reducers: {
    addFavorite: (state, action) => {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(id => id !== String(action.payload));
    },
    toggleFavorite: (state, action) => {
      const exists = state.favorites.includes(action.payload);
      if (exists) {
        state.favorites = state.favorites.filter(id => id !== String(action.payload));
      } else {
        state.favorites.push(action.payload);
      }
    }
  }
});

export const { addFavorite, removeFavorite, toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;