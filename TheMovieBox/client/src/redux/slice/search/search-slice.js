import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "searchData",
  initialState: {
    title: "",
  },

  reducers: {
    searchTitle(state, action) {
      state.title = action.payload;
    },
  },
});

export const searchAction = searchSlice.actions;
