import React from "react";
import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

export default function PrivateRoute({ children }) {
  const { userData } = useSelector((state) => ({ ...state }));
  const { isLoggedIn } = userData.userInfo;

  if (!isLoggedIn) {
    return <Navigate to='/' />;
  }
  return children;
}
