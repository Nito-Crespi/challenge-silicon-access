//src/pages/UserProfile/UserProfile.js

import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { capitalizeWords } from "../../utils/capitalizeWords";

const UserProfile = () => {
  const { userInfo } = useContext(AppContext);

  return (
    <>
      {userInfo ? (
        <div className="h-full w-full bg-eigengrau bg-opacity-70 p-3">
          <h1 className="text-center text-2xl text-primary-cip">
            Información del usuario
          </h1>

          <div className="flex h-[90%] w-full">
            <div className="flex w-1/6 justify-center p-2 [&>*]:p-1">
              <img
                className="w-h-32 h-32"
                alt="Foto de perfil del usuario"
                src={
                  !!userInfo.userprofile
                    ? userInfo.userprofile
                    : `${process.env.PUBLIC_URL}/assets/svg/user-profile.svg`
                }
              />
            </div>

            {/*  */}
            <div className="w-1/2">
              {[
                {
                  label: "Nombre y Apellido:",
                  values: [userInfo.first_name, userInfo.last_name],
                },
                {
                  label: "Usuario:",
                  values: [userInfo.username],
                  label2: "Email:",
                  value2: userInfo.email,
                },
                {
                  label: "Grupo:",
                  values: [userInfo.groups[0].name],
                  label2: "Email:",
                  value2: userInfo.email,
                },
              ].map(({ label, values, label2, value2 }, index) => (
                <div key={index} className="p-2 [&>*]:p-1">
                  <h2 className="inline text-primary-sa">{label}</h2>
                  {values.map((value, i) => (
                    <p key={i} className="inline">
                      {capitalizeWords(value)}
                    </p>
                  ))}
                  {label2 && (
                    <>
                      <h2 className="inline text-primary-sa">{label2}</h2>
                      <p className="inline">{capitalizeWords(value2)}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
            {/*  */}
          </div>

          <hr />
        </div>
      ) : (
        <p>No hay información del usuario disponible.</p>
      )}
    </>
  );
};

export default UserProfile;
