import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    > a {
      background: ${theme.colors.primary};
      color: ${theme.colors.dark.first};
      font-size: ${theme.fonts.sizes.small};
      font-weight: 600;
      border-radius: 20px;
      padding: 1rem 0rem;
      width: 40%;
      transition: all 0.3s ease-in-out;
    }

    > a:hover {
      background: ${theme.colors.dark.third};
      color: ${theme.colors.primary};
      transform: scale(1.1);
    }
  `}
`;
