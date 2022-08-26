export const mapProjects = (projects) => {
  return projects.map((val) => {
    const {
      title = '',
      difficulty = '',
      text_component: textComponent = [],
      link_text: {
        link_github: linkGithub = '',
        link_preview: linkPreview = '',
      } = {},
    } = val;
    return {
      title,
      difficulty,
      textComponent,
      linkGithub,
      linkPreview,
    };
  });
};
