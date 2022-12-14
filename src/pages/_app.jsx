import { ThemeProvider } from 'styled-components';
import P from 'prop-types';
import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';
import { HeadComponent } from '../components/HeadComponent';
import { ParticlesBackground } from '../components/ParticlesBackground';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <HeadComponent />
      <GlobalStyles />
      <ParticlesBackground />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: P.any,
  pageProps: P.any,
};
export default MyApp;
