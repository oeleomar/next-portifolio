import styled, { css } from 'styled-components';

import { Link } from '../../components/ButtonComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.dark.third};
    margin: 0 auto;
    margin-bottom: 2rem;
    padding: 5rem;
    border-radius: 20px;
    width: 50%;
    min-width: 30rem;
    margin-top: 7rem;
    animation: downTop 1s;

    @keyframes downTop {
      0% {
        transform: translateY(20%);
        opacity: 0;
        visibility: hidden;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }
    }

    @media ${theme.media.large} {
      margin-top: 8rem;
    }

    @media ${theme.media.medium} {
      width: 80%;
      padding: 3rem;
    }
    @media ${theme.media.small} {
      transform: translateY(0);
      padding: 1.5rem;
    }
  `}
`;

export const FormContainer = styled.div`
  ${({ theme }) => css`
    input,
    textarea {
      background-color: ${theme.colors.white};
    }

    label {
      display: block;
      text-align: start;
      font-size: ${theme.fonts.sizes.bigsmall};
      color: ${theme.colors.primary};
      margin-bottom: 0.5rem;
      margin-top: 2rem;
    }

    input {
      width: 100%;
      height: 4rem;
      border-radius: 5px;
      border: none;
      display: block;
      padding: 0 1rem;
      font-size: ${theme.fonts.sizes.bigsmall};
    }

    textarea {
      width: 100%;
      margin: 2rem 0;
      font-size: ${theme.fonts.sizes.bigsmall};
      border-radius: 5px;
      border: none;
      padding: 1rem;
    }
    .submit {
      width: 50%;
      background: ${theme.colors.primary};
      color: ${theme.colors.dark.first};
      font-weight: bold;
      font-family: inherit;
      margin: 0 auto;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }

    .honey {
      display: none;
      visibility: hidden;
    }

    .submit:hover {
      background: ${theme.colors.dark.first};
      color: ${theme.colors.primary};
    }

    @media ${theme.media.small} {
      label,
      input,
      textarea {
        font-size: ${theme.fonts.sizes.small};
      }

      .submit {
        width: 80%;
      }
    }
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    transform: translateY(-120%);
    background: ${theme.colors.dark.third};
    max-width: 20rem;
    margin: 0 auto;
    border-radius: 20px 20px 0 0;

    @media ${theme.media.small} {
      transform: translateY(0);
    }

    > ${Link} {
      @media ${theme.media.small} {
        width: 5rem;
      }
    }
  `}
`;
