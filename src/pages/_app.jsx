import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme.js';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
