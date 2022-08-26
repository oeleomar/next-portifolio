import P from 'prop-types';
import * as Styled from './styles';

export function ProjectButtons({ linkGithub, linkPreview }) {
  return (
    <Styled.Container>
      <a href={linkGithub}>Github</a>
      <a href={linkPreview}>Preview</a>
    </Styled.Container>
  );
}

ProjectButtons.propTypes = {
  linkGithub: P.node.isRequired,
  linkPreview: P.string.isRequired,
};
