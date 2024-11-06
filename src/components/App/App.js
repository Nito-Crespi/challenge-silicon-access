//src/components/App/App.js

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainContent from "../../pages/MainContent/MainContent";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <MainContent />
      </Router>
    </>
  );
};

export default App;
