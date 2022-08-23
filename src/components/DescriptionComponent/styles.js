import styled, { css } from 'styled-components';

export const Container = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.large};
    color: ${theme.colors.secundary};
    margin: 5rem 0;
  `}
`;
