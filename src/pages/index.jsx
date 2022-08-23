import Head from 'next/head';
import { Home } from '../templates/home';

import { mapData } from './api/mapData';

export default function Index({ data }) {
  return <Home data={data} />;
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
