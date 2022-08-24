import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 40%;
    animation: downTop 1s;
    position: relative;

    @keyframes downTop {
      0% {
        opacity: 0;
        top: +20%;
      }
      100% {
        opacity: 1;
        top: 0%;
      }
    }
  `}
`;
