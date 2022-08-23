import styled, { css } from 'styled-components';

export const Title = styled.h2`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.fonts.sizes.xxlarge};
    margin: 5rem 0;
  `}
`;
