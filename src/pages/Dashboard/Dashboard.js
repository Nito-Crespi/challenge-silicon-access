//src/pages/Dashboard/Dashboard.js

import React from "react";

const Dashboard = ({ component: Component }) => {
  return <>{Component ? <Component /> : null}</>;
};

export default Dashboard;
