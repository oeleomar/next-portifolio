import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: end;
    position: fixed;
    height: 8rem;
    width: 100%;
  `}
`;

export const HeaderLimitator = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 130rem;
    display: flex;
    align-items: center;
    justify-content: end;
    margin: 0 auto;
  `}
`;
