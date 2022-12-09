import { configureStore } from "@reduxjs/toolkit";
import { movieIDSlice } from "../slice/movies/movieID-slice";
import { userDataSlice } from "../slice/auth/userData-slice";
import { myListSlice } from "../slice/my-list/myList-slice";
import { composeWithDevTools } from "redux-devtools-extension";
// redux-persist
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reducer = combineReducers({
  movieID: movieIDSlice.reducer,
  userData: userDataSlice.reducer,
  listData: myListSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: composeWithDevTools(applyMiddleware(thunk)),
  middleware: [thunk],
});

export default store;
