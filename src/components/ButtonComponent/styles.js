import styled, { css } from 'styled-components';

export const Link = styled.a`
  ${({ theme }) => css`
    display: inline-block;
    margin: 1rem 0.5rem;
    width: 5rem;
    background: ${theme.colors.primary};
    color: ${theme.colors.dark.first};
    border-radius: 5px;

    font-size: ${theme.fonts.sizes.small};
    font-family: inherit;
    cursor: pointer;
  `}
`;
