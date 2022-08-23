import P from 'prop-types';

import { useState } from 'react';
import { ButtonComponent } from '../../components/ButtonComponent';
import { DescriptionComponent } from '../../components/DescriptionComponent';

import { SectionComponent } from '../../components/SectionComponent';
import { TextComponent } from '../../components/TextComponent';
import { TitleComponent } from '../../components/TitleComponent';
import { ImageComponent } from '../../components/ImageComponent';
import { Header } from '../../components/Header';

export const Home = ({ data = {} }) => {
  const { menu, home } = data;
  const [button, setButton] = useState(home.button_links);
  return (
    <>
      <Header menu={menu} />
      <main>
        <SectionComponent>
          <TextComponent>
            <TitleComponent>{home.title}</TitleComponent>
            <DescriptionComponent>{home.description}</DescriptionComponent>
          </TextComponent>
          <ImageComponent src={home}>
            <div>
              <ButtonComponent data={button} />
            </div>
          </ImageComponent>
        </SectionComponent>
      </main>
      <footer></footer>
    </>
  );
};

Home.propTypes = {
  data: P.object.isRequired,
};
