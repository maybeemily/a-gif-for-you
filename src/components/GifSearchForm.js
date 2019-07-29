import React from 'react';
import PropTypes from 'prop-types';
import { SearchWrapper, SearchButton, SearchBox, SearchForm } from '../styles/styles';

function GifSearchForm({ searchText, handleChange, searchSubmit }) {
  return (
  <>
    <SearchWrapper>
      <SearchForm onSubmit={searchSubmit}>
        <SearchBox name="searchText" type="text" value={searchText} onChange={handleChange}/>
        <SearchButton type="submit">Gif Me!</SearchButton>
      </SearchForm>
    </SearchWrapper>
  </>
  );
}

GifSearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  searchSubmit: PropTypes.func.isRequired
};

export default GifSearchForm;
