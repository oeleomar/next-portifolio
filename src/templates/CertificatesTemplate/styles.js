import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    background-color: ${theme.colors.dark.third};
    padding: 2rem;
    border-radius: 20px;

    @media ${theme.media.medium} {
      margin-top: 10rem;
    }
  `}
`;
