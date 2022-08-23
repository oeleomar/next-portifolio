import P from 'prop-types';
import * as Styled from './styles';

export const ButtonComponent = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
};

ButtonComponent.propTypes = {
  children: P.node.isRequired,
};
