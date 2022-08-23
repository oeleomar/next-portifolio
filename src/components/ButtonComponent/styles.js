import styled, { css } from 'styled-components';

export const Link = styled.a`
  ${({ theme }) => css`
    display: inline-block;
    margin: 1rem 2rem;
    padding: 1rem 1rem;
    width: 10rem;
    background: ${theme.colors.primary};
    border-radius: 2rem;
    font-size: ${theme.fonts.sizes.small};
    font-family: inherit;
    cursor: pointer;
    && div {
      display: flex;
      justify-content: center;
    }
  `}
`;
