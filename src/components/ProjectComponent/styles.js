import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 25rem;
    height: 25rem;
    background: ${theme.colors.dark.softFirst};
    padding: 2rem;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `}
`;
