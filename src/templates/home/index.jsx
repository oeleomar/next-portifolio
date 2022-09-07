import P from 'prop-types';

import { useState } from 'react';

import { ButtonComponent } from '../../components/ButtonComponent';
import { SectionComponent } from '../../components/SectionComponent';
import { TextComponent } from '../../components/TextComponent';
import { Header } from '../../components/Header';
import { TagCloudComponent } from '../../components/TagCloudComponent';
import * as Styled from './styles';

export function Home({ data = {} }) {
  const { menu, home } = data;
  const [button, setButton] = useState(home.button_links);
  return (
    <>
      <Header menu={menu} />
      <main>
        <SectionComponent>
          <Styled.Container>
            <TextComponent data={home}>
              <div>
                <ButtonComponent data={button} />
              </div>
            </TextComponent>
            <TagCloudComponent />
            {/*  <ImageComponent src={home}>

          </ImageComponent> */}
          </Styled.Container>
        </SectionComponent>
      </main>
      <footer />
    </>
  );
}

Home.propTypes = {
  data: P.object.isRequired,
};
