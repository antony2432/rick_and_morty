import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "./slices/charactersSlice";

export const store = configureStore({
  reducer: {
    characters: characterSlice,
  },
});
