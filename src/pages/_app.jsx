import { ThemeProvider } from 'styled-components';
import P from 'prop-types';
import Head from 'next/head';
import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portifólio || Eleomar Doneles</title>
        <meta
          name="description"
          content="Página do Eleomar Dorneles com informações sobre sua formação acadêmica, projetos."
        />
        <link rel="canonical" href="https://www.eleomardorneles.com.br/" />
        <meta name="author" content="Eleomar Dorneles" />
        <meta
          name="keywords"
          content="html, css, javascript, node, react, next, programação, portifolio, fullstack, back-end, backend, frontend, front-end, desenvolvedor"
        />
        <meta name="robots" content="index,nofollow" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: P.any,
  pageProps: P.any,
};
export default MyApp;
