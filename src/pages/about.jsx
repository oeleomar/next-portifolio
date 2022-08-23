import { TitleComponent } from '../components/TitleComponent';
import { About } from '../templates/About';
import { mapData } from './api/mapData';

const about = ({ title, menu, about }) => {
  console.log(title, menu);
  return <About data={{ title, menu, about }} />;
};

export default about;

export async function getStaticProps() {
  const res = await fetch(
    'https://api-react.eleomardorneles.com.br/api/portifolios/?populate=deep',
  );
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
