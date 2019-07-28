import React from 'react';
import GifDisplay from '../containers/GifDisplay';
import Header from '../components/Header';
import { GlobalStyle } from '../styles/styles';


export default function App() {
  return (
  <>
  <GlobalStyle/>
  <Header/>
  <GifDisplay/>
  </>
  );
}
