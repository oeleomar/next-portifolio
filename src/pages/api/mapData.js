import { mapProjects } from './mapProjects';

export const mapData = (data = [{}]) => {
  const {
    attributes: {
      title = '',
      menu = {},
      section_two_colimns: sectionTwoColumns = [],
      project = [],
      imagesComponent: certificates = [],
    } = {},
  } = data[0];
  const home = sectionTwoColumns[1];
  const about = sectionTwoColumns[0];
  const projects = mapProjects(project);
  return {
    title,
    menu,
    home,
    about,
    projects,
    certificates,
  };
};
