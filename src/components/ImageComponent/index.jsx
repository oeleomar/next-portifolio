import P from 'prop-types';
import * as Styled from './styles';

export const ImageComponent = ({ children, src }) => {
  const {
    image: { data: { attributes: { url, alternativeText } = {} } = {} } = {},
  } = src;
  return (
    <Styled.Container>
      <img src={url} alt={alternativeText}></img>
      {children}
    </Styled.Container>
  );
};

ImageComponent.propTypes = {
  children: P.node,
  src: P.object,
};
