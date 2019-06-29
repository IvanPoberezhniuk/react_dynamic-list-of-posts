import React from "react";

const SearchField = ({
  searchFieldValue,
  searchInPosts,
  updateSerachFieldValue
}) => {
  return (
    <input
      className="searchField"
      type="text"
      placeholder="Search by title and text..."
      value={searchFieldValue}
      onChange={event => updateSerachFieldValue(event)}
      autoComplete="off"
    />
  );
};

export default SearchField;
