import React from 'react';

const SearchField = ({ filterPosts }) => {
  return (
    <input
      type="search"
      className="searchField"
      placeholder="Search by title and text..."
      onChange={filterPosts}
      autoComplete="off"
    />
  );
};

export default SearchField;
