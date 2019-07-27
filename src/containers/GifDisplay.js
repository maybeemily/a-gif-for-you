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
    getGif();
  }

  componentDidMount() {
    this.fetchGif();
  }

  render() {
    return (
      <form>
        <GifSearchForm searchText={this.state.searchText} handleChange={this.handleChange}/>
        <Gif image={this.fetchData}/>
        <button onClick={this.fetchGif}>Random Gif!</button>
      </form>
    );
  }
}
