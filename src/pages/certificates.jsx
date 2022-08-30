import P from 'prop-types';
import config from '../config/config';
import { CertificatesTemplate } from '../templates/CertificatesTemplate';

import { mapData } from './api/mapData';

function Projects({ menu = {}, certificates = [] }) {
  return <CertificatesTemplate menu={menu} certificates={certificates} />;
}

export default Projects;

Projects.propTypes = {
  menu: P.object,
  certificates: P.array,
};

export async function getStaticProps() {
  try {
    const res = await fetch(config.url);
    const json = await res.json();
    const data = mapData(json.data);
    const { menu, certificates } = data;
    return {
      props: {
        menu,
        certificates,
      },
    };
  } catch (e) {
    console.log(e);
  }
}
