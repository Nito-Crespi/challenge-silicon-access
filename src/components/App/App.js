//src/components/App/App.js

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "../../context/AppContext";
import MainContent from "../../pages/MainContent/MainContent";
import "./App.css";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <MainContent />
      </Router>
    </AppProvider>
  );
};

export default App;
