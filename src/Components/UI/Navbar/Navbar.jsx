import React, { useState } from "react";
import { HamburgerIcon, CloseIcon } from "../Icons";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="items-center w-[100%] rounded-b bg-slate-100 shadow-md fixed z-20">
      <div className="flex justify-between items-center mx-auto max-w-7xl py-1 px-2 md:px-8 sm:px-auto max-h-[3rem]">
        <Logo />
        <div
          name="menu svg"
          className="lg:hidden hidden"
          //delete hidden class to show the svg
          onClick={toggleMenuHandler}
        >
          {!isMenuOpen ? <HamburgerIcon /> : <CloseIcon />}
        </div>
        <div
          name="normal menu"
          className="hidden lg:flex justify-between items-center my-auto space-x-8"
        >
          <a
            href="/home"
            //delete hidden class to show the link
            className="text-xl hover:text-gray-400 transition duration-100 py-1 hidden"
          >
            Ana Sayfa
          </a>
        </div>
      </div>
      <div
        name="mobile menu"
        className={`lg:hidden ${!isMenuOpen && "hidden"}`}
      ></div>
    </nav>
  );
};

export default Navbar;
