//src/pages/LoginForm/LoginForm.js

import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
  const { login } = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { handleLogin } = useAuth(login, setError);

  const validateUsername = (value) => {
    if (!value) {
      setError("El usuario es obligatorio.");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      setError("Debe ser un correo electrónico válido.");
      return false;
    } else if (value.length < 5) {
      setError("El correo debe tener al menos 5 caracteres.");
      return false;
    }
    setError("");
    return true;
  };

  const validatePassword = (value) => {
    if (!value) {
      setError("La contraseña es obligatoria.");
      return false;
    } else if (value.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres.");
      return false;
    } else if (!/[A-Za-z]/.test(value) || !/[0-9]/.test(value)) {
      setError("La contraseña debe incluir letras y números.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isUsernameValid = validateUsername(username);
    const isPasswordValid = validatePassword(password);

    if (isUsernameValid && isPasswordValid) {
      handleLogin(username, password);
    }
  };

  // useEffect(() => {
  //   const FakeAuth = true;
  //   if (FakeAuth) {
  //     setUsername("asd@asd.com");
  //     setPassword("asdzxc123");
  //   } else {
  //     setUsername("noreply+challenge@silicon-access.com");
  //     setPassword("bienvenido123");
  //   }
  // }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex max-h-[600px] min-h-[600px] min-w-[500px] max-w-[500px] flex-col items-center justify-center rounded-lg bg-eigengrau bg-opacity-40 p-5">
        <h2 className="self-center pt-10 text-center text-xl text-primary-text">
          Iniciar Sesión
        </h2>

        <img
          className="m-2 h-36 w-36"
          src={`${process.env.PUBLIC_URL}/assets/svg/logo.svg`}
          alt="Logo de la empresa ficticia"
        />
        <form
          className="flex w-full flex-col items-center pb-32"
          onSubmit={handleSubmit}
        >
          <label className="mb-2 w-full text-center">
            Usuario:
            <input
              className="mt-2 h-10 min-w-[400px] rounded-lg bg-primary-text text-center"
              type="email"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                validateUsername(e.target.value);
              }}
              placeholder="Ingrese su email o usuario"
              required
            />
          </label>
          <label className="mb-2 w-full text-center">
            Contraseña:
            <input
              className="mt-2 h-10 min-w-[400px] rounded-lg bg-primary-text text-center"
              type="password"
              autoComplete="off"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
              placeholder="Ingrese su contraseña"
              required
            />
          </label>
          <button
            type="submit"
            disabled={error}
            className={`mt-5 rounded-lg px-5 py-2 text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              error
                ? "cursor-not-allowed bg-gray-400 text-gray-700"
                : "hover:from-secondary-color-sa hover:to-primary-color-sa hover:text-primary-text-color focus:ring-primary-color-sa transform bg-eigengrau text-primary-text transition-transform duration-300 ease-in-out hover:scale-105"
            }`}
          >
            Iniciar sesión
          </button>
          <p
            className={`mt-5 min-h-[4em] rounded-md bg-eigengrau bg-opacity-40 p-1 font-semibold text-red-500 ${error ? "visible" : "invisible"}`}
          >
            {error ? `Error: ${error}` : ""}
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
