import P from 'prop-types';
import * as Styled from './styles';

import { SectionComponent } from '../../components/SectionComponent';
import { ProjectComponent } from '../../components/ProjectComponent';

export function ProjectsTemplate({ menu = {}, projects = [] }) {
  return (
    <Styled.Container>
      <SectionComponent>
        {projects.map((project) => (
          <ProjectComponent project={project} key={project.title} />
        ))}
      </SectionComponent>
    </Styled.Container>
  );
}

ProjectsTemplate.propTypes = {
  projects: P.array,
  menu: P.object,
};
