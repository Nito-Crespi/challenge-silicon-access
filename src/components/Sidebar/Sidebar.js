//src/components/Sidebar/Sidebar.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ logout }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    {
      label: "Nuevo seguro",
      logo: "insurance",
      action: () => navigate("/new-insurance"),
    },
    { label: "Perfil", logo: "profile", action: () => navigate("/user") },
    { label: "Cliente", logo: "building", action: () => navigate("/customer") },
    {
      label: "Configuración",
      logo: "setting",
      action: () => navigate("/settings"),
    },
    { label: "Ayuda", logo: "help", action: () => navigate("/help") },
    { label: "Cerrar sesión", logo: "logout", action: logout },
  ];

  return (
    <div
      className={`flex h-screen min-h-[500px] flex-col items-center bg-eigengrau text-primary-text transition-all duration-100 ${isCollapsed ? "w-16" : "w-56"}`}
    >
      <img
        className={`h-[155px] w-auto ${isCollapsed ? "" : ""}`}
        src={`${process.env.PUBLIC_URL}/assets/svg/logo.svg`}
        alt="Logo de la empresa ficticia"
      />
      <button
        className={`svg-glow h-8 w-8 cursor-pointer bg-transparent hover:shadow-none focus:outline-none ${isCollapsed ? "ml-1" : "ml-auto mr-2"}`}
        onClick={toggleSidebar}
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/svg/menu.svg`}
          alt="Menu"
          className="h-8 w-8"
        />
      </button>
      <div className="w-full text-center">
        <ul className="list-none p-0">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`${isCollapsed ? "m-4 h-9 w-9 cursor-pointer items-center hover:shadow-none" : "my-4 flex cursor-pointer items-center p-1 hover:shadow hover:shadow-primary-cip"}`}
              onClick={item.action}
            >
              <img
                className={`${isCollapsed ? "svg-glow h-8 w-8" : "ml-2 mr-2 h-5 w-5"}`}
                src={`${process.env.PUBLIC_URL}/assets/svg/${item.logo}.svg`}
                alt={item.label}
              />
              {!isCollapsed && <span>{item.label}</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
