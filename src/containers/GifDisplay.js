import React, { PureComponent } from 'react';
import GifSearchForm from '../components/GifSearchForm';
import Gif from '../components/Gif';
import { getGif } from '../services/GiphyAPI';


class GifDisplay extends PureComponent {

  state = {
    searchText: '',
    imageURL: '',
  }

  fetchGif = () => {
    getGif(this.state.searchText)
      .then((imageURL) => this.setState(imageURL));
  }

  searchSubmit = event => {
    event.preventDefault();
    this.fetchGif();
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name] : target.value });
  }

  render() {
    return (
      <>
        <GifSearchForm searchText={this.state.searchText} handleChange={this.handleChange} searchSubmit={this.searchSubmit}/>
        <Gif imageURL={this.state.imageURL}/>
      </>
    );
  }
}

export default GifDisplay;
