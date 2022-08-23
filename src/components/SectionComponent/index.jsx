import * as Styled from './styles';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';
import { Github } from '@styled-icons/boxicons-logos/Github';

export const SectionComponent = ({ children }) => {
  return <Styled.Container className="section">{children}</Styled.Container>;
};
