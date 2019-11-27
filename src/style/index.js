import { createGlobalStyle, css } from 'styled-components';

const bodyStyles = css`
  font-family: 'Abel', sans-serif;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }
`;
