import React from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
