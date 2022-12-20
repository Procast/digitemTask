import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./Reducers/HomePhotos";

export const store = configureStore({
  reducer: {
    homePhotos: homeReducer,
  },
});
