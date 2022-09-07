import P from 'prop-types';
import * as Styled from './styles';

import { TitleComponent } from '../TitleComponent';
import { DescriptionComponent } from '../DescriptionComponent';

export function TextComponent({ data = {}, children }) {
  return (
    <Styled.Container>
      <TitleComponent>{data.title}</TitleComponent>
      <DescriptionComponent>{data.description}</DescriptionComponent>
      {children || ''}
    </Styled.Container>
  );
}

TextComponent.propTypes = {
  data: P.object,
  children: P.node,
};
