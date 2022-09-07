import styled, { css } from 'styled-components';

import { Container as SectionContainer } from '../../components/SectionComponent/styles';
import { Container as TextComponent } from '../../components/TextComponent/styles';
import { Title as TitleComponent } from '../../components/TitleComponent/styles';
import { Container as DescriptionComponent } from '../../components/DescriptionComponent/styles';
import { Container as ImageContainer } from '../../components/ImageComponent/styles';

export const Home = styled.div`
  ${({ theme }) => css`
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
      animation: goBottom 1s;
      opacity: 0;
      visibility: hidden;
      animation-fill-mode: forwards;
      animation-delay: 0.5s;
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
      overflow-y: hidden;
      opacity: 0;
      visibility: hidden;
      animation: goTop 1s;
      animation-fill-mode: forwards;
      animation-delay: 0.5s;
    }

    @keyframes goTop {
      0% {
        top: 80%;
        left: 80%;
        opacity: 0;
        visibility: hidden;
      }
      100% {
        top: 60%;
        left: 60%;
        opacity: 1;
        visibility: visible;
      }
    }

    @keyframes goBottom {
      0% {
        top: -20%;
        left: -20%;
        opacity: 0;
        visibility: hidden;
      }
      100% {
        top: 0%;
        left: 0%;
        opacity: 1;
        visibility: visible;
      }
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

    > ${SectionContainer} ${ImageContainer} img {
      box-shadow: 10px 10px 0px ${theme.colors.primary};
    }
  `}
`;
