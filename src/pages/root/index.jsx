import React from "react";
import Navbar from "../../components/navbar";
import App from "../../App";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div id="detail">
        <Outlet />
      </div>
      <App />
    </div>
  );
};

export default Root;
