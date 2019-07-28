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
    url: '',
    loading: false
  }

  fetchGif = () => {
    this.setState({ loading: true });
    getGif(this.state.searchText)
      .then(({ imageURL, url }) => this.setState({ imageURL, url, loading: false }));
  }

  searchSubmit = event => {
    event.preventDefault();
    this.fetchGif();
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name] : target.value });
  }

  render() {
    const { searchText, imageURL, url } = this.state;

    return (
      <>
        <GifSearchForm searchText={searchText} handleChange={this.handleChange} searchSubmit={this.searchSubmit}/>
        <GifWithLoading imageURL={imageURL} url={url} isLoading={this.state.loading}/>
      </>
    );
  }
}

export default GifDisplay;
