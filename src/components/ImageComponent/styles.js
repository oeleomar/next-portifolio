import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    animation: topDown 1s;
    > div {
      position: absolute;
      top: 0%;
      left: 90%;
      animation: topDown 1.5s;
    }

    @keyframes topDown {
      0% {
        opacity: 0;
        top: -20%;
      }
      100% {
        opacity: 1;
        top: 0%;
      }
    }
  `}
`;
