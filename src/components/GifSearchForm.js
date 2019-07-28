import React from 'react';
import PropTypes from 'prop-types';
import { SearchForm, SearchButton, SearchBox, Label, Button } from '../styles/styles';

function GifSearchForm({ searchText, handleChange, searchSubmit }) {
  return (
  <>
    <SearchForm onSubmit={searchSubmit}>
      <Label htmlFor="searchText">Tag:</Label>
      <SearchBox name="searchText" type="text" value={searchText} onChange={handleChange}/>
      <SearchButton type="submit">Submit</SearchButton>
    </SearchForm>
      <Button>Random Gif</Button>
      <Button>Clear</Button>
  </>
  );
}

GifSearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  searchSubmit: PropTypes.func.isRequired
};

export default GifSearchForm;
