import P from 'prop-types';
import { Header } from '../../components/Header';
import { ImageContainer } from '../../components/ImageContainer';
import { SectionComponent } from '../../components/SectionComponent';
import * as Styled from './styles';

export const CertificatesTemplate = ({ menu = {}, certificates = [] }) => {
  return (
    <>
      <Header menu={menu} />
      <main>
        <SectionComponent>
          <Styled.Container>
            {certificates.map((cert) => {
              return <ImageContainer key={cert.Title} data={cert} />;
            })}
          </Styled.Container>
        </SectionComponent>
      </main>
    </>
  );
};

CertificatesTemplate.propTypes = {
  menu: P.object,
  certificates: P.array,
};
