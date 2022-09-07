import styled, { css } from 'styled-components';

export const Title = styled.h2`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.fonts.sizes.huge};
    margin: 0 0 3rem 0;

    @media ${theme.media.medium} {
      font-size: ${theme.fonts.sizes.xlarge};
      margin: 0;
    }

    @media ${theme.media.small} {
      font-size: ${theme.fonts.sizes.large};
      margin: 0;
    }
  `}
`;
