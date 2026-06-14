import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="relative">
      <Outlet />
    </div>
  );
};

export default App;
