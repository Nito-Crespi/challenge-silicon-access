//src/pages/MainContent/MainContent.js

import React, { useContext } from "react";
import Nito from "../../components/Nito/Nito";
import Sidebar from "../../components/Sidebar/Sidebar";
import { AppContext } from "../../context/AppContext";
import RoutesConfig from "../../routes";

const MainContent = () => {
  const { token, logout } = useContext(AppContext);

  return (
    <div className="main flex">
      {token && <Sidebar token={token} logout={logout} />}
      <div className="flex-1">
        <RoutesConfig token={token} />
      </div>
      <Nito />
    </div>
  );
};

export default MainContent;
