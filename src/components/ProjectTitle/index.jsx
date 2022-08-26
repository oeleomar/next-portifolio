import P from 'prop-types';
import * as Styled from './styles';

export function ProjectTitle({ data = '' }) {
  return <Styled.Container>{data}</Styled.Container>;
}

ProjectTitle.propTypes = {
  data: P.string,
};
