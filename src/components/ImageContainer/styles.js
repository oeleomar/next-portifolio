import styled, { css } from 'styled-components';

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    :hover {
      transform: scale(1.3);
      z-index: 10;
    }
  `}
`;
