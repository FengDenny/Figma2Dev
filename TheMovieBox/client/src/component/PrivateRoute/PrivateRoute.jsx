import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStatus } from "./hooks/useAuthStatus";

export default function PrivateRoute({ children }) {
  const { loggedIn, status } = useAuthStatus();

  if (status) {
    return "Loading";
  }

  return loggedIn ? children : <Navigate to='/' />;
}
