import P from 'prop-types';
import config from '../config/config';
import { ContactTemplate } from '../templates/ContactTemplate';
import { mapData } from './api/mapData';

const contact = ({ data }) => {
  return <ContactTemplate data={data} />;
};

export async function getStaticProps() {
  try {
    const res = await fetch(config.url);
    const json = await res.json();
    const data = mapData(json.data);
    return {
      props: {
        data,
      },
    };
  } catch (e) {
    console.log(e);
  }
}

export default contact;
