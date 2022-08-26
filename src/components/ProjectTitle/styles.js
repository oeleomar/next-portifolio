import styled, { css } from 'styled-components';

export const Container = styled.h2`
  ${({ theme }) => css`
    text-align: start;
    color: ${theme.colors.primary};
    text-transform: capitalize;
    font-size: ${theme.fonts.sizes.bigsmall};
  `}
`;
