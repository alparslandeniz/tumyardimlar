import React from "react";

const CommunityLogo = () => {
  return (
    <div className="flex justify-center items-center space-x-2 py-3 px-2">
      <img
        src="/itsociety2.png"
        alt="logo"
        className="max-w-[5rem] max-h-[5rem] object-cover"
      />
      <h1 className="text-center sm:text-left text-sm">
        This website has been created by
        <a href="https://itsociety.org" className="text-blue-500" target="_blank" rel="noreferrer">
           {' itsociety.org '}
        </a>
        members.
      </h1>
    </div>
  );
};

export default CommunityLogo;
