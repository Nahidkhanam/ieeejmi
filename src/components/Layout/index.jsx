import React from "react";
import Navbar from "./Navbar/NavbarDesktop";
import NavbarMobile from "./Navbar/NavbarMobile";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout(props) {
  return (
    <React.Fragment>
      <Navbar />
      <NavbarMobile />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
