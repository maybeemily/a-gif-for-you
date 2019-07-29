import React from 'react';
import PropTypes from 'prop-types';
import { SearchWrapper, SearchButton, SearchBox } from '../styles/styles';

function GifSearchForm({ searchText, handleChange, searchSubmit }) {
  return (
  <>
    <SearchWrapper>
      <form onSubmit={searchSubmit}>
        <SearchBox name="searchText" type="text" value={searchText} onChange={handleChange}/>
        <SearchButton type="submit">Gif Me!</SearchButton>
      </form>
      
    </SearchWrapper>
  </>
  );
}

GifSearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  searchSubmit: PropTypes.func.isRequired,
  surpriseSubmit: PropTypes.func.isRequired
};

export default GifSearchForm;
