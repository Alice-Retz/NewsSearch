import PropTypes from 'prop-types';
import React from 'react';

export default function Search({ searchParam, onSearchChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="searchParam">New Search: </label>
      <input
        id="searchParam"
        name="searchParam"
        type="text"
        value={searchParam}
        onChange={onSearchChange}
      />
      <button aria-label="search">Search</button>
    </form>
  );
}

Search.propTypes = {
  searchParam: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
