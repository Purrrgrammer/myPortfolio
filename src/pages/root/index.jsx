import React from "react";
import Navbar from "../../components/navbar";
import { Outlet } from "react-router-dom";
import Greetings from "./greetings";

const Root = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="p-48">
          <Greetings />
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Root;
