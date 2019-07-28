import styled, { createGlobalStyle, keyframes } from 'styled-components';

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
  font-family: 'Concert One', sans-serif;
  font-size: 4em;
`;

/* styles for Loader */

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const gradient = keyframes`
  0%{background-position:70% 0%}
  50%{background-position:31% 100%}
  100%{background-position:70% 0%}
`;

export const Loader = styled.div`
  width: 3rem;
  height: 3rem;
  border: 3px solid orange;
  border-radius: 50%;
  margin: 0 auto;
  background: radial-gradient(circle at center, hotpink 0%, orange 100%);
  background-size: 400% 400%;
  animation: ${spin} 1s linear infinite, ${gradient} 1s ease infinite;
`;
