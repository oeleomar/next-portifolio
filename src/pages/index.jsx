import Head from 'next/head';

import { SectionComponent } from '../components/SectionComponent';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portifólio || Eleomar Doneles</title>
        <meta
          name="description"
          content="Portifólio pessoal do Eleomar Dorneles"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SectionComponent />
      </main>

      <footer></footer>
    </div>
  );
}
