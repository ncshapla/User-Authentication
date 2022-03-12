import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const localEmail = localStorage.getItem("email");
  return localEmail ? <Outlet /> : <Navigate to="auth" />;
};

export default PrivateRoute;
