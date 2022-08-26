/* eslint-disable no-shadow */

import { AboutTemplate } from '../templates/AboutTemplate';
import { mapData } from './api/mapData';
import config from '../config/config';

const about = ({ title, menu, about }) => {
  return <AboutTemplate data={{ title, menu, about }} />;
};

export default about;

export async function getStaticProps() {
  const res = await fetch(config.url);
  const json = await res.json();
  const data = mapData(json.data);
  const { title, menu, about } = data;
  return {
    props: {
      title,
      menu,
      about,
    },
  };
}
