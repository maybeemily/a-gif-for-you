import React from 'react';
import PropTypes from 'prop-types';

export default function WithLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if(!isLoading) return (<Component {...props}/>);
    WithLoadingComponent.propTypes = {
      isLoading: PropTypes.bool.isRequired,
    };
    return (<p>Loading...Loading...Loading...</p>);
  };
}

WithLoading.propTypes = {
  Component: PropTypes.element,
};
