import { createGlobalStyle } from 'styled-components';

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

  body {
    background-color: ${({ theme }) => theme.colors.dark.first};
    font-family: ${({ theme }) => theme.fonts.family.secundary};
    animation: screen 3s;
  }

  @keyframes screen {
    0% {
      opacity: 0
    }
    100% {
      opacity: 1;
    }
  }

  h1, h2, h3 {
    font-family: ${({ theme }) => theme.fonts.family.primary};
    font-weight: 800;
  }

  h1, h2, h3, h4, h5, h6, p, a {
    color: ${({ theme }) => theme.colors.white};
  }

  a {
    text-decoration: none;
  }
`;
