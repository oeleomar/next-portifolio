import P from 'prop-types';
import { NavLinks } from '../NavLinks';
import { TitleComponent } from '../TitleComponent';
import * as Styled from './styles';

export const Header = ({ menu = {} }) => {
  return (
    <Styled.Container>
      <Styled.HeaderLimitator>
        <NavLinks links={menu} />
      </Styled.HeaderLimitator>
    </Styled.Container>
  );
};

Header.propTypes = {
  menu: P.object,
};
