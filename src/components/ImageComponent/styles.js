import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    animation: topDownImage 1s;
    -webkit-animation: topDownImage 1s;
    max-width: 50rem;
    max-height: 50rem;

    > div {
      position: absolute;
      top: 0%;
      left: 90%;
      animation: topDown 1.5s;
    }

    > img {
      max-width: 50rem;
      max-height: 50rem;
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

    @keyframes topDownImage {
      0% {
        opacity: 0;
        transform: translateY(-20%);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media ${theme.media.large} {
      > img {
        max-width: 45rem;
        max-height: 45rem;
      }
    }

    @media ${theme.media.medium} {
      margin-top: 8rem;
      margin-bottom: 5rem;
      > img {
        max-width: 40rem;
        max-height: 40rem;
      }
    }
    @media ${theme.media.small} {
      margin-top: 8rem;
      margin-bottom: 5rem;
      > img {
        max-width: 30rem;
        max-height: 30rem;
      }
    }
  `}
`;
