import P from 'prop-types';
import './styles';

import { ButtonComponent } from '../../components/ButtonComponent';
import { DescriptionComponent } from '../../components/DescriptionComponent';
import { Header } from '../../components/Header';
import { ImageComponent } from '../../components/ImageComponent';
import { SectionComponent } from '../../components/SectionComponent';
import { TextComponent } from '../../components/TextComponent';
import { TitleComponent } from '../../components/TitleComponent';

export const About = ({ data: { title = '', menu = {}, about = {} } = {} }) => {
  console.log(menu);
  return (
    <>
      <TitleComponent>CommingSoon</TitleComponent>
    </>
  );
};

About.propTypes = {
  data: P.object,
  title: P.string,
  menu: P.object,
  about: P.object,
};
