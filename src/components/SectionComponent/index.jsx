import * as Styled from './styles';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';
import { Github } from '@styled-icons/boxicons-logos/Github';

export const SectionComponent = () => {
  return (
    <Styled.Container className="section">
      <h1>Eleomar Dorneles</h1>
      <h2>Desenvolvedor WEB</h2>
      <div>
        <a href="https://github.com/oeleomar">
          Github <Github className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/eleomar-dorneles/">
          LinkeIn <LinkedinSquare className="icon" />
        </a>
      </div>
    </Styled.Container>
  );
};
