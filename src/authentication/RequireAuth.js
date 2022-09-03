import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";

const RequireAuth = ({ children }) => {
  const { isLoading, users, isLoggedIn } = useAuth();

  let location = useLocation();

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (isLoggedIn && users.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};

export default RequireAuth;
