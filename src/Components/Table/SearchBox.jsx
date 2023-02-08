import React from "react";

function SearchBox({ setQuery }) {
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="relative w-64">
      <input
        type="text"
        className="w-full pl-10 pr-4 py-2 rounded-full text-gray-800 bg-gray-100 focus:outline-none"
        placeholder="Anahtar Kelime"
        onChange={handleChange}
      />
      <div className="absolute top-0 left-0 pl-3 pt-3">
        <svg
          className="fill-current text-gray-500 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
      </div>
    </div>
  );
}

export default SearchBox;
