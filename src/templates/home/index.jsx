import P from 'prop-types';

import { useState } from 'react';

import { ButtonComponent } from '../../components/ButtonComponent';
import { SectionComponent } from '../../components/SectionComponent';
import { TextComponent } from '../../components/TextComponent';
import { ImageComponent } from '../../components/ImageComponent';
import { Header } from '../../components/Header';

export function Home({ data = {} }) {
  const { menu, home } = data;
  const [button, setButton] = useState(home.button_links);
  return (
    <>
      <Header menu={menu} />
      <main>
        <SectionComponent>
          <TextComponent data={home} />
          <ImageComponent src={home}>
            <div>
              <ButtonComponent data={button} />
            </div>
          </ImageComponent>
        </SectionComponent>
      </main>
      <footer />
    </>
  );
}

Home.propTypes = {
  data: P.object.isRequired,
};
