import React, { PureComponent } from 'react';
import GifSearchForm from '../components/GifSearchForm';
import Gif from '../components/Gif';
import { getGif } from '../services/GiphyAPI';


export default class GifDisplay extends PureComponent {

  state = {
    searchText: '',
    image: '',
    
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name] : target.value });
  }

  fetchGif = () => {
    getGif(this.state.searchText)
      .then((image) => this.setState(image));
  }

  searchSubmit = event => {
    event.preventDefault();
    this.fetchGif();
  }

  render() {
    return (
      <>
        <GifSearchForm searchText={this.state.searchText} handleChange={this.handleChange} searchSubmit={this.searchSubmit}/>
        <Gif image={this.state.image}/>
      </>
    );
  }
}
