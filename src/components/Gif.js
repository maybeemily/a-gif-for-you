import React from 'react';
import PropTypes from 'prop-types';

function Gif({ image }) {
  Gif.defaultProps = { image: '' };
  return (
    <img src={image}></img>
  );
}

Gif.propTypes = {
  image: PropTypes.string.isRequired
};

export default Gif;
