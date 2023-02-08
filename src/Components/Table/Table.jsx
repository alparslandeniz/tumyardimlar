import React, { useState } from "react";
import SearchBox from "./SearchBox";

const Table = () => {
  const [query, setQuery] = useState("");
  console.log(query);

  return (
    <main>
      <SearchBox setQuery={setQuery} />
    </main>
  );
};

export default Table;
