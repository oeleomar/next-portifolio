export const mapProjects = (projects) => {
  return projects.map((val) => {
    const {
      title = '',
      difficulty = '',
      text_component = [],
      link_text: { link_github = '', link_preview = '' } = {},
    } = val;
    return {
      title,
      difficulty,
      text_component,
      link_github,
      link_preview,
    };
  });
};
