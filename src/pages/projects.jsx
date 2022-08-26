import P from 'prop-types';
import config from '../config/config';

import { ProjectsTemplate } from '../templates/ProjectsTemplate';
import { mapData } from './api/mapData';

function Projects({ menu = {}, projects = [] }) {
  return <ProjectsTemplate menu={menu} projects={projects} />;
}

export default Projects;

Projects.propTypes = {
  menu: P.object,
  projects: P.array,
};

export async function getStaticProps() {
  const res = await fetch(config.url);
  const json = await res.json();
  const data = mapData(json.data);
  const { menu, projects } = data;
  return {
    props: {
      menu,
      projects,
    },
  };
}
