//src/components/Nito/Nito.js

import { useState } from "react";
import Overlay from "../Overlay/Overlay";
import About from "../About/About";

const Nito = () => {
  const [isOverlayActive, setOverlayActive] = useState(false);

  const openOverlay = () => setOverlayActive(true);
  const closeOverlay = () => setOverlayActive(false);

  return (
    <>
      <p
        onClick={openOverlay}
        className="absolute bottom-0 right-0 m-2 cursor-pointer text-eigengrau hover:text-primary-text"
      >
        Creador: Nito.Crespi
      </p>
      <Overlay isActive={isOverlayActive} onClose={closeOverlay}>
        <About />
      </Overlay>
    </>
  );
};

export default Nito;
