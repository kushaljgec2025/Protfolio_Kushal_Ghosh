import React from "react";
import { Outlet } from "react-router-dom";
import Head from "./Head";

function Layout() {
  return (
    <div className="w-full px-1 py-2 flex flex-col justify-center items-center  dark:bg-info dark:bg-transparent  dark:text-slate ">
      <Outlet />
    </div>
  );
}

export default Layout; // Ensure the component is exported
