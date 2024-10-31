//src/routes.js

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CustomerProfile from "./pages/CustomerProfile/CustomerProfile";
import Dashboard from "./pages/Dashboard/Dashboard";
import Help from "./pages/Help/Help";
import LoginForm from "./pages/LoginForm/LoginForm";
import NewInsurance from "./pages/NewInsurance/NewInsurance";
import Settings from "./pages/Settings/Settings";
import UserProfile from "./pages/UserProfile/UserProfile";
import PrivateRoute from "./utils/PrivateRoute";

const RoutesConfig = ({ token }) => {
  return (
    <Routes>
      <Route
        path="/login"
        element={!token ? <LoginForm /> : <Navigate to="/dashboard" />}
      />
      <Route
        path="/dashboard"
        element={<PrivateRoute component={Dashboard} token={token} />}
      />
      <Route
        path="/user"
        element={<PrivateRoute component={UserProfile} token={token} />}
      />
      <Route
        path="/customer"
        element={<PrivateRoute component={CustomerProfile} token={token} />}
      />
      <Route
        path="/new-insurance"
        element={<PrivateRoute component={NewInsurance} token={token} />}
      />
      <Route
        path="/help"
        element={<PrivateRoute component={Help} token={token} />}
      />
      <Route
        path="/settings"
        element={<PrivateRoute component={Settings} token={token} />}
      />
      <Route
        path="*"
        element={<Navigate to={!token ? "/login" : "/dashboard"} />}
      />
    </Routes>
  );
};

export default RoutesConfig;
