import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    max-width: 120rem;
    text-align: center;
    margin: 0 auto;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap-reverse;
    position: relative;

    @media ${theme.media.large} {
      width: 90%;
    }

    @media ${theme.media.medium} {
      width: 90%;
      align-items: center;
      justify-content: center;
    }
  `}
`;
