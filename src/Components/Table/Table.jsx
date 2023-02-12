import React, { useEffect, useState, useCallback } from "react";
import SearchBox from "./SearchBox";

import { allForms } from "../Constants/Data";
import { Categories } from "../Constants/Categories";

const Table = () => {
  const [query, setQuery] = useState("");

  const [reversedData, setReversedData] = useState([]);

  //reverse the data
  useEffect(() => {
    const reverseForms = [...allForms].reverse();
    setReversedData(reverseForms);
  }, []);

  const [filteredData, setFilteredData] = useState(reversedData);

  const [categoryFilter, setCategoryFilter] = useState(Categories[0]);

  const handleCategoryFilter = (str) => {
    if (str == null) str = "Kategori";
    setCategoryFilter(str);

    if (str === "Kategori") setFilteredData(reversedData);
    else
      setFilteredData(reversedData.filter((row) => row.category.includes(str)));
  };

  const handleSearch = useCallback(() => {
    setCategoryFilter(Categories[0]);
    setFilteredData(
      reversedData.filter((row) =>
        Object.values(row).some((value) =>
          value.toString().toLowerCase().includes(query)
        )
      )
    );
  }, [query, reversedData]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch, query]);

  return (
    <main
      className="flex flex-col justify-between space-y-6 items-center
    w-full max-w-5xl py-5 md:px-2"
    >
      <SearchBox setQuery={setQuery} />
      <div className="min-h-[42rem] w-full">
        <table className="table-auto min-w-full min-h-full text-left mx-auto">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className={"px-4 py-2 w-[60%] md:w-[65%]"}>Açıklama</th>
              <th className="px-4 py-2 w-[40%] md:w-[35%]">
                <div className="flex">
                  <select
                    className="text-slate-800 py-1 w-full bg-gray-100 rounded-lg px-1 font-semibold"
                    id="category-dropdown"
                    onChange={(e) => handleCategoryFilter(e.target.value)}
                    value={categoryFilter}
                  >
                    {Categories.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="">
            {filteredData.map((row, index) => (
              <tr key={index} className="bg-slate-50 border-2">
                <td className={"border px-2 py-1 md:px-4 md:py-2"}>
                  <a
                    href={row.url}
                    onclick="captureOutboundLink({row.url}); return false;"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 flex items-center"
                  >
                    {row.description}
                  </a>
                </td>
                <td className="border px-2 py-1 md:px-4 md:py-2">
                  {row.category}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Table;
