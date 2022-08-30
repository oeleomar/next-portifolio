import styled, { css } from 'styled-components';

import { Container as SectionContainer } from '../../components/SectionComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    background-color: ${theme.colors.dark.third};
    padding: 2rem;
    border-radius: 20px;
    animation: downTop 1s;

    @media ${theme.media.medium} {
      margin-top: 10rem;
    }

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
  `}
`;
