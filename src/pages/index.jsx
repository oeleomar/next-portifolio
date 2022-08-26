import P from 'prop-types';
import { Home } from '../templates/home';

import { mapData } from './api/mapData';
import config from '../config/config';

export default function Index({ data }) {
  return <Home data={data} />;
}

export async function getStaticProps() {
  const res = await fetch(config.url);
  const json = await res.json();
  const data = mapData(json.data);

  return {
    props: {
      data,
    },
  };
}

Index.propTypes = {
  data: P.node,
};
