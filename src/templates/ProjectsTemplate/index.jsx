import P from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import * as Styled from './styles';

import { ProjectComponent } from '../../components/ProjectComponent';
import { Header } from '../../components/Header';

export function ProjectsTemplate({ menu = {}, projects = [] }) {
  const [project, setProject] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const handleChange = (value = 'all') => {
    if (value === 'all') {
      setFilteredProjects(projects);
    }

    if (value === 'easy') {
      projects.map((val) => {
        console.log(filteredProjects);
        if (val.difficulty === value) setFilteredProjects([val]);
        return null;
      });
    }
  };

  useEffect(() => {
    setProject(filteredProjects);
    console.log(filteredProjects);
  }, [filteredProjects]);

  return (
    <>
      <Header menu={menu} />
      <main>
        <Styled.SectionDiv>
          <div className="mainContainer">
            <div className="buttonContainer">
              <button type="button" onClick={() => handleChange('all')}>
                Todos
              </button>
              <button type="button" onClick={() => handleChange('easy')}>
                Facil
              </button>
              <button type="button" onClick={() => handleChange('medium')}>
                Médio
              </button>
              <button type="button" onClick={() => handleChange('hard')}>
                Dificil
              </button>
            </div>
            <div className="projectsContainer">
              {project.map((val) => (
                <ProjectComponent project={val} key={val.title} />
              ))}
            </div>
          </div>
        </Styled.SectionDiv>
      </main>
      <footer />
    </>
  );
}

ProjectsTemplate.propTypes = {
  projects: P.array,
  menu: P.object,
};
