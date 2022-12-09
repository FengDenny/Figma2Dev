import { createSlice } from "@reduxjs/toolkit";

export const myListSlice = createSlice({
  name: "myListData",

  initialState: {
    myListData: [],
  },

  reducers: {
    appendToList(state, action) {
      const listData = action.payload;
      const isMovieAppended = state.myListData.find(
        (movie) => movie.movieID === action.payload.movieID
      );
      if (!isMovieAppended) {
        state.myListData.push(listData);
      }
    },

    clearList(state) {
      state.myListData = [];
    },
  },
});

export const myListAction = myListSlice.actions;
