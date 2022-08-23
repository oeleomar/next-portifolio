import P from 'prop-types';
import * as Styled from './styles';

export const DescriptionComponent = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

DescriptionComponent.propTypes = {
  children: P.node.isRequired,
};
