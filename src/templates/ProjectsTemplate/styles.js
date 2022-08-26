import styled, { css } from 'styled-components';

import { Container as SectionContainer } from '../../components/SectionComponent/styles';

export const SectionDiv = styled(SectionContainer).attrs({ as: 'div' })`
  ${({ theme }) => css`
    > .mainContainer {
      width: 100%;
      min-height: 100%;
      background: ${theme.colors.dark.third};
      border-radius: 20px;
      padding: 0 5rem;
      margin-top: 25rem;
      padding-bottom: 5rem;
    }

    > .mainContainer .buttonContainer {
      transform: translateY(-100%);
    }
    > .mainContainer .buttonContainer button {
      background: ${theme.colors.dark.first};
      border: none;
      color: ${theme.colors.white};
      font-size: ${theme.fonts.sizes.small};
      padding: 0.5rem 1rem;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
    }

    > .mainContainer .buttonContainer button.active {
      color: ${theme.colors.primary};
      background: ${theme.colors.dark.third};
      border: 1px solid ${theme.colors.primary};
      border-bottom: 1px solid ${theme.colors.dark.third};
    }

    > .mainContainer .projectsContainer {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
      gap: 2rem;
      justify-items: center;
    }

    @media ${theme.media.large} {
      > .mainContainer {
        margin-top: 25rem;
      }

      > .mainContainer .projectsContainer {
      }
    }

    @media ${theme.media.small} {
      > .mainContainer {
        padding: 0 2rem 2rem 2rem;
      }
    }
  `}
`;
