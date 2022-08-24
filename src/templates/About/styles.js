import styled, { css } from 'styled-components';

import { Container as SectionContainer } from '../../components/SectionComponent/styles';
import { Container as TextComponent } from '../../components/TextComponent/styles';
import { Title as TitleComponent } from '../../components/TitleComponent/styles';
import { Container as DescriptionComponent } from '../../components/DescriptionComponent/styles';

export const Home = styled.div`
  ${({ theme }) => css`
    padding-top: 8rem;

    > ${SectionContainer} ${TextComponent} {
      padding: 2rem;
      position: relative;
    }

    > ${SectionContainer} ${TextComponent}::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 40%;
      border: 5px ${theme.colors.primary} solid;
      border-bottom: 5px;
      border-right: 5px;
      width: 40%;
    }

    > ${SectionContainer} ${TextComponent}::before {
      content: '';
      position: absolute;
      top: 60%;
      left: 60%;
      height: 40%;
      border: 5px ${theme.colors.primary} solid;
      border-top: 5px;
      border-left: 5px;
      width: 40%;
    }

    > ${SectionContainer} ${TextComponent} ${TitleComponent} {
      font-size: ${theme.fonts.sizes.large};
      text-align: start;
      margin: 1rem 0;
      color: ${theme.colors.primary};
    }

    > ${SectionContainer} ${TextComponent} ${DescriptionComponent} {
      font-size: ${theme.fonts.sizes.small};
      text-align: justify;
      margin: 1rem 0;
      color: ${theme.colors.white};
    }
  `}
`;
