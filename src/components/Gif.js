import React from 'react';
import PropTypes from 'prop-types';

function Gif({ imageURL, url }) {
  return (
    <a href={url}><img src={imageURL}/></a>
  );
}

Gif.propTypes = {
  imageURL: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Gif;
