import React from 'react';
import PropTypes from 'prop-types';

function Gif({ imageURL }) {
  return (
    <img src={imageURL}/>
  );
}

Gif.propTypes = {
  imageURL: PropTypes.string.isRequired
};

export default Gif;
