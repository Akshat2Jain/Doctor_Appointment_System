import React from "react";
import { Navigate } from "react-router-dom";
import { message } from "antd";

const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem("token")) {
    return children;
  } else {
    message.error("You Need to login");
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
