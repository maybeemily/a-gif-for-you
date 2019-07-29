import React from 'react';
import PropTypes from 'prop-types';
import { GifWrapper } from '../styles/styles';

function Gif({ imageURL, url, title }) {
  return (
    <GifWrapper>
      <a href={url}><img src={imageURL} alt={title}/></a>
    </GifWrapper>
  );
}

Gif.propTypes = {
  imageURL: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Gif;
