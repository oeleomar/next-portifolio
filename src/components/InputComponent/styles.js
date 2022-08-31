import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, required }) => css`
  ${required} ? label::after {
    content: '*';
    color: red;
    margin-left: 0.5rem;
  } : ""
  `}
`;
