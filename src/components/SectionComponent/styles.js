import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    max-width: 120rem;
    text-align: center;
    margin: auto;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-size: 6em;
    }

    h2 {
      font-size: 4em;
    }

    div {
      margin-top: 10rem;
      display: flex;
    }
    a {
      font-size: 2rem;
      background-color: black;
      padding: 1rem 5rem;
      color: white;
      margin: 2rem;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    a .icon {
      width: 1.5em;
      margin-left: 1rem;
    }
  `}
`;
