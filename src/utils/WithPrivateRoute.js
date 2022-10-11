import React from "react";
import { Navigate } from "react-router-dom";

const WithPrivateRoute = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("persist:root"));

  console.log(children);

  if (token) {
    return children;
  }

  return children;

  // return <Navigate to="/login" />;
};

export default WithPrivateRoute;
