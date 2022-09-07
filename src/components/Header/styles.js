import styled, { css } from 'styled-components';

const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.header`
  ${({ theme, visible }) => css`
    display: flex;
    align-items: center;
    justify-content: end;
    position: fixed;
    height: 8rem;
    width: 100%;
    z-index: 5;
    background: ${theme.colors.dark.first};

    @media ${theme.media.medium} {
      transition: all 0.3s ease-in-out;
      height: 100vh;
      z-index: 5;
      background: ${theme.colors.dark.first};
      align-items: center;
      justify-content: center;

      visibility: hidden;
      opacity: 0;
      ${visible && menuVisible(theme)}

      > div {
        justify-content: center;
      }

      > div nav ul {
        flex-direction: column;
      }

      > div nav ul li {
        margin: 5rem 0;
        text-align: center;
      }
    } ;
  `}
`;

export const HeaderLimitator = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-right: 5rem;
    display: flex;
    align-items: center;
    justify-content: end;
    @media ${theme.media.medium} {
      margin-right: 0;
    } ;
  `}
`;

export const Button = styled.button`
  ${({ theme, visible }) => css`
    width: 4rem;
    color: ${theme.colors.white};
    background: ${theme.colors.dark.first};
    border: none;
    display: none;
    position: fixed;
    top: 2rem;
    right: 2rem;
    pointer-events: ${visible ? 'none' : 'all'};
    z-index: 6;

    @media ${theme.media.medium} {
      display: flex;
      align-items: center;
      justify-content: center;
    } ;
  `}
`;
