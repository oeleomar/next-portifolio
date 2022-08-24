import P from 'prop-types';
import { useState } from 'react';
import { NavLinks } from '../NavLinks';
import { TitleComponent } from '../TitleComponent';
import * as Styled from './styles';
import { Menu as MenuIcon } from '@styled-icons/material-outlined';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

export const Header = ({ menu = {} }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Styled.Button
        visible={visible}
        onClick={() => setVisible(!visible)}
        aria-label="Open/Close menu"
      >
        {visible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Styled.Button>
      <Styled.Container visible={visible} onClick={() => setVisible(!visible)}>
        <Styled.HeaderLimitator>
          <NavLinks links={menu} />
        </Styled.HeaderLimitator>
      </Styled.Container>
    </>
  );
};

Header.propTypes = {
  menu: P.object,
};
