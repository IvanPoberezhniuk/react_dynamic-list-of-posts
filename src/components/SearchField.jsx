import React from 'react';

const SearchField = ({ debouncedChangeSearchFieldValue }) => {
  return (
    <input
      type="search"
      className="searchField"
      placeholder="Search by title and text..."
      onChange={debouncedChangeSearchFieldValue}
      autoComplete="off"
    />
  );
};

export default SearchField;
