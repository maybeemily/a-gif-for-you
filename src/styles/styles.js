import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { reset } from 'styled-reset';
/* Global Styles */

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Concert+One|Varela+Round&display=swap');
  body {
    ${reset}
    font-family: 'Varela Round', sans-serif;
    background: linear-gradient(white 0%, hotpink 90%);
    background-size: 600% 600%;
  }

  input, button, label {
    letter-spacing: .09em;
    font-size: 1.5em;
    font-family: 'Varela Round', sans-serif;
  }

  img {
    max-width: 60vw;
    max-height: 50vh;
  }
`;

export const Wrapper = styled.div`
  text-align: center;
  height: 95vh;
`;

/* styles for Header.js */

export const HeaderH1 = styled.h1`
  color: #FB5012;
  margin-top: 2rem;
  letter-spacing: .4em;
  text-transform: uppercase;
  font-family: 'Concert One', sans-serif;
  font-size: 4em;
  transition: color .5s ease-in-out;
  &:hover {
    color: hotpink;
  }
`;

/* styles for WithLoading.js */

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
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin: 0 auto;
  background: radial-gradient(circle at center, hotpink 0%, #FB5012 100%);
  background-size: 600% 600%;
  animation: ${spin} 1s linear infinite, ${gradient} 3s ease infinite;
`;

/* styles for GifSearchForm.js */

export const SearchForm = styled.form`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const SearchBox = styled.input`
  background-color: white;
  border: 2px solid pink;
  border-radius: 2px;
  width: 20vw;
  min-width: 200px;
  height: 3rem;
  margin: 3rem 2rem 3rem 1rem;
  padding-right: 1%;
  padding-left: 1%;
  &:focus {
    outline-color: hotpink;
  }
`;

export const SearchButton = styled.button`
  background-color: pink;
  border: 2px solid pink;
  border-radius: 2px;
  height: 3rem;
  padding-right: 1%;
  padding-left: 1%;
  &:focus {
    outline-color: hotpink;
  }
`;

export const Button = styled(SearchButton)`
  margin: rem;
`;

export const Label = styled.label`
  font-size: 1.75em;
`;

export const GifFooter = styled.footer`
  text-align: center;
  font-size: 1em;
`;
