/* https://github.com/Nito-Crespi/challenge-silicon-access */

//src/pages/About/About.js

import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const About = () => {
  const { userInfo } = useContext(AppContext);
  return (
    <>
      <div className="p-2 [&>*]:p-1">
        <p className="inline">Creador: Nito Crespi:</p>
        <p className="inline">
          <a
            href="https://nito-crespi.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            [Portfolio]
          </a>
        </p>
        <br />
        <p className="inline">Link del repositorio:</p>
        <p className="inline">
          <a
            href="https://github.com/Nito-Crespi/challenge-silicon-access"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            [GitHub]
          </a>
        </p>
        <br />
        <p className="inline">Deploy en producción:</p>
        <p className="inline">
          <a
            href="https://challenge-silicon-access.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            [Vercel]
          </a>
        </p>
      </div>
    </>
  );
};

export default About;
