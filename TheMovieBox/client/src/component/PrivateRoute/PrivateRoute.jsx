import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children }) {
  const { userData } = useSelector((state) => ({ ...state }));
  const { isLoggedIn } = userData.userInfo;

  if (!isLoggedIn) {
    console.log("Please login to gain access");
  }

  return isLoggedIn ? children : <Navigate to='/' />;
}
