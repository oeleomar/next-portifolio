import P from 'prop-types';
import * as Styled from './styles';

export const ButtonComponent = ({ children, href }) => {
  return <Styled.Link href={href}>{children}</Styled.Link>;
};

ButtonComponent.propTypes = {
  children: P.node.isRequired,
};
