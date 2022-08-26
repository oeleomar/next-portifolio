import P from 'prop-types';
import * as Styled from './styles';

export function DescriptionComponent({ children = '' }) {
  return <Styled.Container>{children}</Styled.Container>;
}

DescriptionComponent.propTypes = {
  children: P.string,
};
