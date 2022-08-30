import P from 'prop-types';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { Github } from '@styled-icons/boxicons-logos/Github';
import * as Styled from './styles';

export const ButtonComponent = ({ data = [] }) => {
  const { button_link: linkedIn = '' } = data[0];
  const { button_link: GithubLink = '' } = data[1];
  const { button_link: InstagramLink = '' } = data[2];

  return (
    <>
      <Styled.Link href={linkedIn}>
        <LinkedinSquare />
      </Styled.Link>
      <Styled.Link href={InstagramLink}>
        <Instagram />
      </Styled.Link>
      <Styled.Link href={GithubLink}>
        <Github />
      </Styled.Link>
    </>
  );
};

ButtonComponent.propTypes = {
  data: P.array,
};
