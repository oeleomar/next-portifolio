import styled, { css } from 'styled-components';

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    cursor: pointer;

    img {
      transition: all 0.3s ease-in-out;
    }

    img:hover {
      transform: scale(1.05) rotate(5deg);
    }
  `}
`;
