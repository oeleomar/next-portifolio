import styled, { css } from 'styled-components';

export const Container = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};
    color: ${theme.colors.primary};
    margin: 5rem 0;

    @media ${theme.media.medium} {
      margin: 2rem;
    }

    @media ${theme.media.small} {
      font-size: ${theme.fonts.sizes.small};
    }
  `}
`;
