import React from 'react';
import PropTypes from 'prop-types';

function Gif({ imageURL, url, title }) {
  return (
    <a href={url}><img src={imageURL} alt={title}/></a>
  );
}

Gif.propTypes = {
  imageURL: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Gif;
