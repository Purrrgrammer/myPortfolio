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
        <div className="p-48 xl:text-5xl md:text-3xl sm:text-3xl">
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
