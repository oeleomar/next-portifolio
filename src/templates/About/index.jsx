import P from 'prop-types';
import styled from 'styled-components';

import { Container } from '../../components/TextComponent/styles';

import { ButtonComponent } from '../../components/ButtonComponent';
import { DescriptionComponent } from '../../components/DescriptionComponent';
import { Header } from '../../components/Header';
import { ImageComponent } from '../../components/ImageComponent';
import { SectionComponent } from '../../components/SectionComponent';
import { TextComponent } from '../../components/TextComponent';
import { TitleComponent } from '../../components/TitleComponent';

export const About = ({ data: { title = '', menu = {}, about = {} } = {} }) => {
  return (
    <>
      <Header menu={menu} />

      <main>
        <SectionComponent>
          <TextComponent>
            <TitleComponent>{about.title}</TitleComponent>
            <DescriptionComponent>{about.description}</DescriptionComponent>
          </TextComponent>
          <ImageComponent src={about} />
        </SectionComponent>
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
