import React from 'react';
import GifDisplay from '../containers/GifDisplay';
import Header from '../components/Header';
import { GlobalStyle, Wrapper } from '../styles/styles';
import Footer from './Footer';
import Instructions from './Instructions';


export default function App() {
  return (
  <>
  <Wrapper>
    <Header/>
    <Instructions/>
    <GlobalStyle/>
    <GifDisplay/>
    <Footer/>
  </Wrapper>
  </>
  );
}
