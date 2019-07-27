import React from 'react';
import PropTypes from 'prop-types';

function GifSearchForm({ searchText, handleChange, searchSubmit }) {
  return (
    <form onSubmit={searchSubmit}>
      <input name="searchText" type="text" value={searchText} onChange={handleChange}/>
      <button type="submit">Gif Me!</button>
    </form>
  );
}

GifSearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  searchSubmit: PropTypes.func.isRequired
};

export default GifSearchForm;
