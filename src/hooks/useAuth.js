//src/hooks/useAuth.js

import { useCallback } from "react";

const useAuth = (login, setError) => {
  const handleLogin = useCallback(
    async (username, password) => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/auth/login/`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
          },
        );

        if (!response.ok) {
          throw new Error("Error en la autenticación");
        }

        const data = await response.json();
        if (data.token) {
          login(data);
        } else {
          setError("Error de autenticación");
        }
      } catch (error) {
        console.error(error);
        setError("Error en la autenticación");
      }
    },
    [login, setError],
  );

  return { handleLogin };
};

export default useAuth;
