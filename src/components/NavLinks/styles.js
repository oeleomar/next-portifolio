import styled, { css } from 'styled-components';

export const NavBar = styled.nav`
  ${({ theme }) => css`
    > ul {
      display: flex;
    }

    > ul li {
      margin: 0 3rem;
      list-style: none;
    }

    > ul li a {
      font-size: ${theme.fonts.sizes.bigsmall};
      text-transform: uppercase;
      transition: all 0.2s ease-in-out;
    }

    > ul li a:hover {
      color: ${theme.colors.primary};
    }
  `}
`;
