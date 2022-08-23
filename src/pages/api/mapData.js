export const mapData = (data = [{}]) => {
  const {
    attributes: { title = '', menu = {}, section_two_colimns = [] } = {},
  } = data[0];
  const home = section_two_colimns[0];
  const about = section_two_colimns[1];

  return {
    title,
    menu,
    home,
    about,
  };
};
