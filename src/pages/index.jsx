import Head from 'next/head';

import { SectionComponent } from '../components/SectionComponent';
import { mapData } from './api/mapData';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portifólio || Eleomar Doneles</title>
        <meta
          name="description"
          content="Portifólio pessoal do Eleomar Dorneles"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SectionComponent>Olá mudno</SectionComponent>
      </main>

      <footer></footer>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    'https://api-react.eleomardorneles.com.br/api/portifolios/?populate=deep',
  );
  const json = await res.json();
  const data = mapData(json.data);

  return {
    props: {
      data,
    },
  };
}
