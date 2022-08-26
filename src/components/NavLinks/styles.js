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
      position: relative;
    }

    > ul li a:hover {
      color: ${theme.colors.primary};
    }

    > ul li a:hover::after {
      left: 25%;
      width: 50%;
    }

    > ul li a::after {
      content: '';
      position: absolute;
      bottom: 0.7rem;
      left: 50%;
      top: 100%;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors.primary};
      transition: all 0.3s ease-in-out;
    }
  `}
`;
