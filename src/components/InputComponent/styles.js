import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, required }) => css`
    > label::after {
      content: ${required ? "'*'" : "''"};
      color: red;
      margin-left: 0.5rem;
    }
  `}
`;
