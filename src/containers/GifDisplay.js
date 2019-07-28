import React, { PureComponent } from 'react';
import GifSearchForm from '../components/GifSearchForm';
import Gif from '../components/Gif';
import { getGif } from '../services/GiphyAPI';
import WithLoading from '../components/WithLoading';

const GifWithLoading = WithLoading(Gif);

class GifDisplay extends PureComponent {

  state = {
    searchText: '',
    imageURL: '',
    loading: false
  }

  fetchGif = () => {
    this.setState({ loading: true });
    getGif(this.state.searchText)
      .then(({ imageURL }) => this.setState({ imageURL, loading: false }));
  }

  searchSubmit = event => {
    event.preventDefault();
    this.fetchGif();
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name] : target.value });
  }

  render() {
    const { searchText, imageURL } = this.state;

    return (
      <>
        <GifSearchForm searchText={searchText} handleChange={this.handleChange} searchSubmit={this.searchSubmit}/>
        <GifWithLoading imageURL={imageURL} isLoading={this.state.loading}/>
      </>
    );
  }
}

export default GifDisplay;
