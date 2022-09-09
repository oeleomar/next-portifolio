import P from 'prop-types';
import Head from 'next/head';

export const HeadComponent = () => {
  return (
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Portifólio || Eleomar Doneles</title>
      <meta
        name="keywords"
        content="html, css, javascript, node, react, next, programação, portifolio, fullstack, back-end, backend, frontend, front-end, desenvolvedor"
      />
      <meta
        name="description"
        content="Página do Eleomar Dorneles com informações sobre sua formação acadêmica e projetos."
      />
      <link rel="canonical" href="https://eleomardorneles.com.br/" />
      <meta name="author" content="Eleomar Dorneles" />
      <meta name="robots" content="index,nofollow" />
      <link rel="icon" href="/favicon.ico" />

      <meta
        name="msapplication-TileImage"
        content="https://eleomardorneles.com.br/logo-img.png"
      />

      <meta property="og:site_name" content="Portifólio || Eleomar Doneles" />
      <meta property="og:title" content="Portifólio || Eleomar Doneles" />
      <meta
        property="og:description"
        content="Página do Eleomar Dorneles com informações sobre sua formação acadêmica e projetos."
      />

      <meta
        property="og:image"
        content="https://eleomardorneles.com.br/logo-img.png"
      />

      <meta property="og:type" content="website" />
      <meta property="og:image:type" content="image/png" />

      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="298" />

      <meta property="og:url" content="https://eleomardorneles.com.br" />
    </Head>
  );
};
