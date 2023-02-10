import React, { Fragment } from "react";
import { LogoIcon } from "../Icons";

const Logo = () => {
  return (
    <Fragment>
      <a
        href="/"
        className="flex items-center text-center justify-start 
        space-x-3 py-1 hover:text-blue-400 transition duration-150"
      >
        <LogoIcon />
        <h2 className="md:text-xl flex flex-row space-x-1 md:space-x-2">
          <p>T Ü M</p>
          <p className="font-bold">Y A R D I M L A R</p>
        </h2>
      </a>
    </Fragment>
  );
};

export default Logo;
