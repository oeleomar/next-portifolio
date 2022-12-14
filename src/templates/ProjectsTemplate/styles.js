import styled, { css } from 'styled-components';

import { Container as SectionContainer } from '../../components/SectionComponent/styles';

export const SectionDiv = styled(SectionContainer).attrs({ as: 'div' })`
  overflow: hidden;
  ${({ theme }) => css`
    > .mainContainer {
      width: 100%;
      min-height: 100%;
      background: ${theme.colors.dark.softThird};
      border-radius: 20px;
      padding: 0 5rem;
      padding-bottom: 5rem;
      margin-top: 10rem;
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
      background: ${theme.colors.dark.softFirstAll};
      border: 1px solid ${theme.colors.dark.softFirstAll};
      color: ${theme.colors.white};
      font-size: ${theme.fonts.sizes.small};
      padding: 0.5rem 0rem;
      width: 10rem;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }

    > .mainContainer .buttonContainer button.active {
      color: ${theme.colors.primary};
      background: ${theme.colors.dark.softThird};
      border: 1px solid ${theme.colors.primary};
      border-bottom: 1px solid ${theme.colors.dark.third};
    }

    @media ${theme.media.large} {
      > .mainContainer {
        width: 80%;
        margin: 0 auto;
        margin-top: 15rem;
      }
    }

    @media ${theme.media.medium} {
      align-items: flex-end;
      margin-top: 5rem;
      > .mainContainer {
        width: 100%;
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
