import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: start;

    > ul li {
      font-size: ${theme.fonts.sizes.small};
      margin: 0.5rem 2rem;
      color: ${theme.colors.white};
    }
  `}
`;
