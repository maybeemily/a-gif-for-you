import styled, { createGlobalStyle } from 'styled-components';

/* Global Styles */

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Concert+One|Varela+Round&display=swap');
  body {
    font-family: 'Varela Round', sans-serif;
  }
`;

/* styles for Header.js */

export const HeaderH1 = styled.h1`
  letter-spacing: .4em;
  text-transform: uppercase;
  font-family: 'Concert One', cursive;
  font-size: 4em;
`;
