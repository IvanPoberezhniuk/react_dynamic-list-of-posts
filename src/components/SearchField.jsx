import React from "react";

const SearchField = ({ searchFieldValue, updateSerachFieldValue }) => {
  return (
    <input
      type="search"
      className="searchField"
      placeholder="Search by title and text..."
      value={searchFieldValue}
      onChange={updateSerachFieldValue}
      autoComplete="off"
    />
  );
};

export default SearchField;
