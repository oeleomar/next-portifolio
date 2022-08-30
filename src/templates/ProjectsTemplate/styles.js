import styled, { css } from 'styled-components';

import { Container as SectionContainer } from '../../components/SectionComponent/styles';
import { NavBar } from '../../components/NavLinks/styles';

export const SectionDiv = styled(SectionContainer).attrs({ as: 'div' })`
  ${({ theme }) => css`
    > .mainContainer {
      width: 100%;
      min-height: 100%;
      background: ${theme.colors.dark.third};
      border-radius: 20px;
      padding: 0 5rem;
      padding-bottom: 5rem;
      animation: downTop 1s;
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

    > .mainContainer .buttonContainer {
      transform: translateY(-100%);
    }
    > .mainContainer .buttonContainer button {
      background: ${theme.colors.dark.first};
      border: 1px solid ${theme.colors.dark.first};
      color: ${theme.colors.white};
      font-size: ${theme.fonts.sizes.small};
      padding: 0.5rem 0rem;
      width: 10rem;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }

    > .mainContainer .buttonContainer button.active {
      color: ${theme.colors.primary};
      background: ${theme.colors.dark.third};
      border: 1px solid ${theme.colors.primary};
      border-bottom: 1px solid ${theme.colors.dark.third};
    }

    @media ${theme.media.large} {
      > .mainContainer {
        margin-top: 25rem;
        margin-top: 10rem;
      }
    }

    @media ${theme.media.small} {
      align-items: flex-end;
      margin-top: 5rem;
      > .mainContainer {
        padding: 0 2rem 2rem 2rem;
      }

      > .mainContainer .buttonContainer button {
        width: 6rem;
      }
    }
  `}
`;

export const PojectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  gap: 2rem;
  justify-items: center;
  transition: all 0.3s ease-in-out;
  min-height: 25rem;
`;
