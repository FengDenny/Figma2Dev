import { createSlice } from "@reduxjs/toolkit";

export const movieIDSlice = createSlice({
  name: "movieID",
  initialState: {
    id: "",
  },
  reducers: {
    addMovieID(state, action) {
      const newMovieID = action.payload;
      state.id = newMovieID;
    },
  },
});

export const movieAction = movieIDSlice.actions;
