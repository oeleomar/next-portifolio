import { TitleComponent } from '../components/TitleComponent';
import { mapData } from './api/mapData';

const about = ({ data }) => {
  console.log(data);
  return <TitleComponent>Comming Soon</TitleComponent>;
};

export default about;

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
