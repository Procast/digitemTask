import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "photos",
  initialState: {
    photos: [],
  },
  reducers: {
    addPhotos: (state, action) => {
      if (action.payload.page === 1) {
        state.photos = action.payload.data;
      } else {
        state.photos = [...state.photos, ...action.payload.data];
      }
    },
  },
});

export const { addPhotos } = homeSlice.actions;

export default homeSlice.reducer;
