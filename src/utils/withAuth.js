//src/utils/withAuth.js

import React from "react";
import { Navigate } from "react-router-dom";

const withAuth = (Component, redirectPath = "/login") => {
  return function AuthComponent({ token, ...props }) {
    return token ? <Component {...props} /> : <Navigate to={redirectPath} />;
  };
};

export default withAuth;
