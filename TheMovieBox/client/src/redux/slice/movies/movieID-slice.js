import { createSlice } from "@reduxjs/toolkit";

export const movieIDSlice = createSlice({
  name: "movieID",
  initialState: {
    id: "",
    movieListID: [],
  },
  reducers: {
    addMovieID(state, action) {
      const newMovieID = action.payload;
      state.id = newMovieID;
    },

    addMovieToListID(state, action) {
      const listID = action.payload;
      const inMovieListArray = state.movieListID.find(
        (movie) => movie.id === action.payload.id
      );
      if (!inMovieListArray) {
        state.movieListID.push(listID);
      }
    },
    clearState(state) {
      state.movieListID = [];
    },
  },
});

export const movieAction = movieIDSlice.actions;
