import { createGlobalStyle } from 'styled-components';
import { getColor } from '../theme/color';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Quicksand', sans-serif;
    margin: 0;
    padding: 0;
  }

  ::-webkit-input-placeholder {
    font-family: 'Quicksand', sans-serif;
  }
  :-moz-placeholder {
    font-family: 'Quicksand', sans-serif;
  }
  ::-moz-placeholder {
    font-family: 'Quicksand', sans-serif;
  }
  :-ms-input-placeholder {
    font-family: 'Quicksand', sans-serif;
  }

  a {
    color: ${getColor('secondary')};
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
`;
