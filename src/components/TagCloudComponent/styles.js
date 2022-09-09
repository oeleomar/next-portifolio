import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    transition: all 0.3s ease-in-out;
    animation: topDown 1s;
    opacity: 0.6;

    @keyframes topDown {
      0% {
        transform: translateY(-20%);
      }

      100% {
        transform: translateY(0%);
      }
    }

    > .Sphere {
      color: ${theme.colors.secundary};
      font-size: ${theme.fonts.sizes.medium};
    }

    .tagcloud--item:hover {
      opacity: 1;
    }

    @media ${theme.media.large} {
      width: 500px;
      height: 500px;
    }

    @media ${theme.media.medium} {
      opacity: 0.4;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -10;
      width: auto;
      height: auto;
      > .Sphere {
        font-size: ${theme.fonts.sizes.small};
      }
    }
  `}
`;
