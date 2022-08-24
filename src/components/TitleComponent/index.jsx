import P from 'prop-types';
import * as Styled from './styles';

export const TitleComponent = ({ children = '' }) => {
  return <Styled.Title>{children}</Styled.Title>;
};

TitleComponent.propTypes = {
  children: P.string,
};
