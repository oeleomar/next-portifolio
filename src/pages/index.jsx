import P from 'prop-types';
import { Home } from '../templates/home';

import { mapData } from './api/mapData';
import config from '../config/config';
import { HeadComponent } from '../components/HeadComponent';

export default function Index({ data }) {
  return (
    <>
      <HeadComponent />
      <Home data={data} />
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(config.url);
    const json = await res.json();
    const data = mapData(json.data);
    return {
      props: {
        data,
      },
      revalidate: 60 * 60,
    };
  } catch (e) {
    //
  }
}

Index.propTypes = {
  data: P.object,
};
