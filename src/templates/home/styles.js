import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: 10rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.medium} {
      margin-top: 5rem;
      justify-content: center;
    }

    @media ${theme.media.small} {
      margin-top: 0;
    }
  `}
`;
