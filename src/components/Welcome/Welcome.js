//src/pages/Welcome/Welcome.js

import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Welcome = () => {
  const { userInfo } = useContext(AppContext);
  return (
    <>
      <div className="p-2 [&>*]:p-1">
        <h1 className="text-center text-3xl text-eigengrau">
          ¡Bienvenido{" "}
          {userInfo ? userInfo.first_name + " " + userInfo.last_name : "???"}!
        </h1>
      </div>
    </>
  );
};

export default Welcome;
