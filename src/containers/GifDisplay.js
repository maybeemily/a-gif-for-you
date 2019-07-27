import React, { PureComponent } from 'react';
import GifSearchForm from '../components/GifSearchForm';
import Gif from '../components/Gif';


export default class GifDisplay extends PureComponent {

  state = {
    searchText: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name] : target.value });
  }

  render() {
    return (
      <form>
        <GifSearchForm />
        <Gif/>
        <button>Random Gif!</button>
      </form>
    );
  }
}
