import P from 'prop-types';
import * as Styled from './styles';

export function ImageComponent({ children, src }) {
  const {
    image: { data: { attributes: { url, alternativeText } = {} } = {} } = {},
  } = src;
  return (
    <Styled.Container>
      <img src={url} alt={alternativeText} />
      {children}
    </Styled.Container>
  );
}

ImageComponent.propTypes = {
  children: P.node,
  src: P.object,
};
