//src/pages/CustomerProfile/CustomerProfile.js

import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { capitalizeWords } from "../../utils/capitalizeWords";

const CustomerProfile = () => {
  const { customerInfo } = useContext(AppContext);

  return (
    <>
      {customerInfo ? (
        <div className="h-full w-full bg-eigengrau bg-opacity-70 p-3">
          <h1 className="text-center text-2xl text-primary-cip">
            Información del cliente
          </h1>

          <div className="p-2 [&>*]:p-1">
            {customerInfo.logo ? (
              <img
                className="h-52"
                src={customerInfo.logo}
                alt="Logo del cliente"
              />
            ) : (
              <></>
            )}
            <h2 className="text-xl">{capitalizeWords(customerInfo.name)}</h2>
            <h2 className="inline text-primary-sa">Dominio:</h2>
            <p className="inline">
              <a
                href={"https://" + capitalizeWords(customerInfo.domain)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Página WEB
              </a>
            </p>
          </div>

          <hr />

          <div className="p-2 [&>*]:p-1">
            <h2 className="inline text-primary-sa">Ubicación:</h2>
            <p className="inline">
              <a
                href={customerInfo.location.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Ver en el mapa
              </a>
            </p>
            <iframe
              title="Ubicación del cliente en el mapa"
              width="100%"
              height="250"
              src={`https://www.google.com/maps?q=${customerInfo.geo_latitude},${customerInfo.geo_longitude}&hl=es&z=14&output=embed`}
              allowFullScreen
              loading="lazy"
              className="mt-4"
            ></iframe>
          </div>
        </div>
      ) : (
        <p>No hay información del cliente disponible.</p>
      )}
    </>
  );
};

export default CustomerProfile;
