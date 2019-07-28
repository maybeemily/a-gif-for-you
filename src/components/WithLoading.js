import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from '../styles/styles';

export default function WithLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if(!isLoading) return (<Component {...props}/>);
    WithLoadingComponent.propTypes = {
      isLoading: PropTypes.bool.isRequired,
    };
    return (<Loader/>);
  };
}

WithLoading.propTypes = {
  Component: PropTypes.element,
};
