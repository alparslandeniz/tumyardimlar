import React, { Fragment } from "react";
import { LogoIcon } from "../Icons";

const Logo = () => {
  return (
    <Fragment>
      <a
        href="/home"
        className="sm:w-1/2 md:w-4/12 flex items-center text-center justify-start 
        space-x-3 py-4 hover:text-blue-400 transition duration-150"
      >
        <LogoIcon />
        <h2 className="text-2xl">
          T U M <b>Y A R D I M L A R</b>
        </h2>
      </a>
    </Fragment>
  );
};

export default Logo;
