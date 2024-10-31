//src/hooks/useAuth.js

import { useCallback, useState } from "react";

const useAuth = (login) => {
  const [error, setError] = useState(null);

  const handleLogin = useCallback(
    async (username, password) => {
      console.log(username + " " + password);
      setError(null);
      try {
        const response = await fetch("/backend.json");
        if (!response.ok) throw new Error("Error al cargar las credenciales");

        const data = await response.json();
        if (data.user?.username && data.token) {
          login(data);
        } else {
          throw new Error("Credenciales inválidas");
        }
      } catch (err) {
        console.error(err);
        setError(err.message || "Error en la autenticación");
      }
    },
    [login],
  );

  return { handleLogin, error };
};

export default useAuth;
