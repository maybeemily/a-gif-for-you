import React, { PureComponent } from 'react';
import GifSearchForm from '../components/GifSearchForm';
import Gif from '../components/Gif';
import { getGif } from '../services/GiphyAPI';


export default class GifDisplay extends PureComponent {

  state = {
    searchText: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name] : target.value });
  }

  fetchGif = () => {
    getGif();
  }

  render() {
    return (
      <form>
        <GifSearchForm />
        <Gif/>
        <button onClick={this.fetchGif}>Random Gif!</button>
      </form>
    );
  }
}
