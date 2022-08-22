import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  a {
    text-decoration: none;
  }
`;
