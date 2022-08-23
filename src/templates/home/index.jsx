import P from 'prop-types';
import Head from 'next/head';

import { useState } from 'react';
import { ButtonComponent } from '../../components/ButtonComponent';
import { DescriptionComponent } from '../../components/DescriptionComponent';

import { SectionComponent } from '../../components/SectionComponent';
import { TextComponent } from '../../components/TextComponent';
import { TitleComponent } from '../../components/TitleComponent';
import { ImageComponent } from '../../components/ImageComponent';

export const Home = ({ data = {} }) => {
  const { menu, home } = data;
  const [button, setButton] = useState(home.button_links);
  return (
    <>
      <Head>
        <title>Portifólio || Eleomar Doneles</title>
        <meta
          name="description"
          content="Portifólio pessoal do Eleomar Dorneles"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
