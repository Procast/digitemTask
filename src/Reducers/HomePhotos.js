import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "photos",
  initialState: {
    photos: [],
    searchedPhotos: [],
    searchTerm: "car",
  },
  reducers: {
    addPhotos: (state, action) => {
      if (action.payload.page === 1) {
        state.photos = action.payload.data;
      } else {
        state.photos = [...state.photos, ...action.payload.data];
      }
    },

    searchedPhotos: (state, action) => {
      if (action.payload.page === 1) {
        state.searchedPhotos = action.payload.data;
      } else {
        state.searchedPhotos = [
          ...state.searchedPhotos,
          ...action.payload.data,
        ];
      }
    },
    searchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { addPhotos, searchedPhotos, searchTerm } = homeSlice.actions;

export default homeSlice.reducer;
