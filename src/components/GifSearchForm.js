import React from 'react';
import PropTypes from 'prop-types';

function GifSearchForm({ searchText, handleChange }) {
  return (
    <input name="searchText" type="text" value={searchText} onChange={handleChange}/>
  );
}

GifSearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default GifSearchForm;
