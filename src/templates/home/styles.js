import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: 10rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;
