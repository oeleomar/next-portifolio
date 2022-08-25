import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 40%;
    animation: downTop 1s;
    position: relative;

    @keyframes downTop {
      0% {
        opacity: 0;
        transform: translateY(20%);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media ${theme.media.medium} {
      max-width: 90%;
      margin-top: 0rem;
      margin-bottom: 2rem;
    }
  `}
`;
