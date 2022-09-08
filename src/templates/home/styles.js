import styled, { css } from 'styled-components';

import { Container as SectionContainer } from '../../components/SectionComponent/styles';
import { Container as TextContainer } from '../../components/TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: 10rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.medium} {
      margin-top: 5rem;
      justify-content: center;
    }

    @media ${theme.media.small} {
      margin-top: 0;
    }

    @media ${theme.media.xlarge} {
      margin: 0 auto;
      margin-top: 10rem;
      width: 85%;
      > ${TextContainer} {
        max-width: 35%;
      }
    }
  `}
`;

export const BeforeSection = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.xlarge} {
      ${SectionContainer} {
        max-width: 100%;
      }
    }
  `}
`;
