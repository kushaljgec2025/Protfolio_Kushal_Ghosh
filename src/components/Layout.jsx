import React from "react";
import { Outlet } from "react-router-dom";
import Head from "./Head";
import Contact from "./Contact";
function Layout() {
  return (
    <div>
      <Head />
      <Outlet />
      <Contact />
    </div>
  );
}

export default Layout;
