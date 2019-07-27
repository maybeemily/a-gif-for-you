import React from 'react';
import PropTypes from 'prop-types';
import Gif from './Gif';


function Gifs({ images }) {
  const gifList = images.map((image, i) => (
    <li key={i}>
      <Gif image={image}/>
    </li>
  ));

  return (
    <ul>
      {gifList}
    </ul>
  );
}

Gifs.propTypes = {
  images: PropTypes.array.isRequired
};

export default Gifs;
