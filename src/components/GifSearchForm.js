import React from 'react';
import PropTypes from 'prop-types';
import { SearchForm, SearchButton } from '../styles/styles';

function GifSearchForm({ searchText, handleChange, searchSubmit }) {
  return (
    <form onSubmit={searchSubmit}>
      <SearchForm name="searchText" type="text" value={searchText} onChange={handleChange}/>
      <SearchButton type="submit">Gif Me!</SearchButton>
    </form>
  );
}

GifSearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  searchSubmit: PropTypes.func.isRequired
};

export default GifSearchForm;
