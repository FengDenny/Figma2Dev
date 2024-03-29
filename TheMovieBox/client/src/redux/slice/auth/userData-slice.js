import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    userInfo: {
      uid: "",
      accessToken: "",
      displayName: "",
      email: "",
      emailVerified: "",
      phoneNumber: "",
      photoURL: "",
      isLoggedIn: false,
    },

    usersCollectionID: {
      userID: "",
    },

    metadata: {
      creationTime: "",
      lastSignInTime: "",
    },
  },

  reducers: {
    addUserAccountInfo(state, action) {
      const userAccountInfo = action.payload;
      state.userInfo = {
        uid: userAccountInfo.uid,
        accessToken: userAccountInfo.accessToken,
        displayName: userAccountInfo.displayName,
        email: userAccountInfo.email,
        emailVerified: userAccountInfo.emailVerified,
        phoneNumber: userAccountInfo.phoneNumber,
        photoURL: userAccountInfo.photoURL,
        isLoggedIn: userAccountInfo.isLoggedIn,
      };
    },

    addUserCollectionID(state, action) {
      const userInfo = action.payload;
      state.usersCollectionID = {
        userID: userInfo.userID,
      };
    },

    addUserMetaData(state, action) {
      const userMetaData = action.payload;
      state.metadata = {
        creationTime: userMetaData.creationTime,
        lastSignInTime: userMetaData.lastSignInTime,
      };
    },
  },
});

export const userAction = userDataSlice.actions;
