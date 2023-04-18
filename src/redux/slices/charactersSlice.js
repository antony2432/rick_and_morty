import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
  favorites: [],
  onlyCharacter: {},
};

export const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setChararters: (state, action) => {
      state.characters.push(action.payload);
    },
    deleteChararter: (state, action) => {
      const newCharacters = state.characters.filter(
        (c) => c.id !== action.payload.id
      );
      if (action.payload.isFav) {
        const newFavorite = state.favorites.filter(
          (f) => f.id !== action.payload.id
        );
        state.favorites = newFavorite;
      }
      state.characters = newCharacters;
    },
    addFavorite: (state, action) => {
      const indexC = state.characters.findIndex(
        (c) => c.id === action.payload.id
      );
      state.characters[indexC].isFav = true;
      state.favorites.push(state.characters[indexC]);
    },
    deleteFavorite: (state, action) => {
      const indexC = state.characters.findIndex(
        (c) => c.id === action.payload.id
      );
      state.characters[indexC].isFav = false;
      const newFavorites = state.favorites.filter(
        (f) => f.id !== action.payload.id
      );
      state.favorites = newFavorites;
    },
  },
});

export const allCharaters = (state) => state.characters.characters;
export const allFavorite = (state) => state.characters.favorites;
export const { setChararters, deleteChararter, addFavorite, deleteFavorite } =
  characterSlice.actions;
export default characterSlice.reducer;
