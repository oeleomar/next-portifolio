import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme.js';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Portifólio || Eleomar Doneles</title>
        <meta
          name="description"
          content="Portifólio pessoal do Eleomar Dorneles"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
