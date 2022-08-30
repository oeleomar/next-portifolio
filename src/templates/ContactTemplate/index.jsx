import P from 'prop-types';
import { ButtonComponent } from '../../components/ButtonComponent';
import { Header } from '../../components/Header';
import { InputComponent } from '../../components/InputComponent';
import { SectionComponent } from '../../components/SectionComponent';
import * as Styled from './styles';

export const ContactTemplate = ({ data }) => {
  const { menu, home } = data;
  const { button_links: button } = home;
  return (
    <>
      <Header menu={menu} />
      <SectionComponent>
        <Styled.Container>
          <Styled.ButtonContainer>
            <ButtonComponent data={button} />
          </Styled.ButtonContainer>
          <Styled.FormContainer>
            <form
              action="https://formsubmit.co/eleomar.dev@gmail.com"
              method="post"
            >
              <InputComponent
                id="nome"
                labelText="Nome"
                placeholder="Nome"
                isRequired
                type="text"
                key="nome"
              />
              <InputComponent
                id="email"
                labelText="Email"
                placeholder="Email"
                isRequired
                type="email"
                key="email"
              />
              <InputComponent
                id="telefone"
                labelText="Telefone"
                placeholder="(xx) xxxxx-xxxx"
                isRequired={false}
                type="tel"
                key="telefone"
              />
              <textarea
                name="descricao"
                id="descricao"
                cols="30"
                rows="5"
                placeholder="Digite seu recado"
              />
              <input
                type="hidden"
                name="_next"
                value="https://www.eleomardorneles.com.br/"
              />
              <input type="text" name="_honey" className="honey" />
              <input type="submit" value="Enviar Mensagem" className="submit" />
            </form>
          </Styled.FormContainer>
        </Styled.Container>
      </SectionComponent>
    </>
  );
};

ContactTemplate.propTypes = {
  data: P.object.isRequired,
};
