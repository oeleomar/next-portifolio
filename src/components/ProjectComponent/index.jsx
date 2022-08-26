import P from 'prop-types';
import * as Styled from './styles';

import { ProjectTitle } from '../ProjectTitle';
import { ProjectDescription } from '../ProjectDescription';
import { ProjectButtons } from '../ProjectButtons';

export function ProjectComponent({ project = {} }) {
  const { title, textComponent, linkGithub, linkPreview } = project;
  return (
    <Styled.Container>
      <ProjectTitle data={title} />
      <ProjectDescription data={textComponent} />
      <ProjectButtons linkGithub={linkGithub} linkPreview={linkPreview} />
    </Styled.Container>
  );
}

ProjectComponent.propTypes = {
  project: P.object.isRequired,
};
