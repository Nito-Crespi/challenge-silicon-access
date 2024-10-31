//src/utils/PrivateRoute.js

import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  token,
  redirectPath = "/login",
  ...rest
}) => {
  return token ? <Component {...rest} /> : <Navigate to={redirectPath} />;
};

export default PrivateRoute;
