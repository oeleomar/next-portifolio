import { mapProjects } from './mapProjects';

export const mapData = (data = [{}]) => {
  const {
    attributes: {
      title = '',
      menu = {},
      section_two_colimns = [],
      project = [],
    } = {},
  } = data[0];
  const home = section_two_colimns[0];
  const about = section_two_colimns[1];
  const projects = mapProjects(project);
  console.log(projects);
  return {
    title,
    menu,
    home,
    about,
    projects,
  };
};
