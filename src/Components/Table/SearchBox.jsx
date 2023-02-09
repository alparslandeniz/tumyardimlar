import React from "react";

function SearchBox({ setQuery }) {
  const handleChange = (event) => {
    const query = event.target.value.toString().toLowerCase();
    setQuery(query);
  };

  return (
    <div className="flex flex-col space-y-2 items-center w-full px-2">
      <h1 className="text-2xl font-semibold py-2">Arama Yap</h1>
      <div className="relative min-w-64 w-full max-w-2xl z-1">
        <input
          type="text"
          className="w-full pl-10 pr-4 py-2 rounded-full text-gray-800 bg-gray-100 focus:outline-none shadow-md"
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
    </div>
  );
}

export default SearchBox;
