//src/context/AppContext.js

import React, { createContext, useCallback, useState } from "react";
import AuthService from "./AuthService";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [authData, setAuthData] = useState(AuthService.getStoredToken());

  const login = useCallback((data) => {
    AuthService.storeToken(data);
    setAuthData(AuthService.getStoredToken());
  }, []);

  const logout = useCallback(() => {
    AuthService.clearToken();
    setAuthData(null);
  }, []);

  return (
    <AppContext.Provider
      value={{
        token: authData?.token,
        userInfo: authData?.itemData?.userInfo || {},
        customerInfo: authData?.itemData?.customerInfo || {},
        profile: authData?.itemData?.profile || {},
        catalogData: authData?.itemData?.catalogData || {
          carColors: [],
          carBrands: [],
          carModels: [],
          carTypes: [],
          idTypes: [],
          insurances: [],
        },
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
