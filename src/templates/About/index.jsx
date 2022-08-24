import P from 'prop-types';
import * as Styled from './styles';

import { Container } from '../../components/TextComponent/styles';
import { Header } from '../../components/Header';
import { ImageComponent } from '../../components/ImageComponent';
import { SectionComponent } from '../../components/SectionComponent';
import { TextComponent } from '../../components/TextComponent';

export const About = ({ data: { title = '', menu = {}, about = {} } = {} }) => {
  return (
    <>
      <Header menu={menu} />
      <main>
        <Styled.Home>
          <SectionComponent>
            <TextComponent data={about} />
            <ImageComponent src={about} />
          </SectionComponent>
        </Styled.Home>
      </main>
      <footer></footer>
    </>
  );
};

About.propTypes = {
  data: P.object,
  title: P.string,
  menu: P.object,
  about: P.object,
};
