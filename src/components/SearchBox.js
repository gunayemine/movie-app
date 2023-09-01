import React from "react";

const SearchBox = (props) => {
  return (
    <div className="w-full">
      <input
        className="border border-gray-300 w-full p-2 form-control outline-none"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Arama..."
      ></input>
    </div>
  );
};

export default SearchBox;
