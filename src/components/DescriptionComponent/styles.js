import styled, { css } from 'styled-components';

export const Container = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};
    font-family: ${theme.fonts.family.secundary};
    font-weight: 500;
    letter-spacing: 1px;
    color: ${theme.colors.primary};
    margin: 2rem 0;

    @media ${theme.media.medium} {
      margin: 2rem;
    }

    @media ${theme.media.small} {
      font-size: ${theme.fonts.sizes.small};
    }
  `}
`;
