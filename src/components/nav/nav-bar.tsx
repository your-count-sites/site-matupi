"use client";

import React from "react";
import DesktopNav from "./desktop-nav";
import NavBarMobile from "./mobile-nav";

const NavBar = () => {
  return (
    <header className="w-full overflow-hidden bg-white">
      <DesktopNav />
      <NavBarMobile />
    </header>
  );
};

export default NavBar;
