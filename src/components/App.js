import React from 'react';
import GifDisplay from '../containers/GifDisplay';
import Header from '../components/Header';
import { GlobalStyle, Wrapper } from '../styles/styles';


export default function App() {
  return (
  <>
  <Wrapper>
    <Header/>
    <GlobalStyle/>
    <GifDisplay/>
  </Wrapper>
  </>
  );
}
