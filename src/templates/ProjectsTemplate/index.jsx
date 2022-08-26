import P from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import * as Styled from './styles';

import { ProjectComponent } from '../../components/ProjectComponent';
import { Header } from '../../components/Header';

export function ProjectsTemplate({ menu = {}, projects = [] }) {
  const [project, setProject] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const button1 = useRef(null);
  const button2 = useRef(null);
  const button3 = useRef(null);
  const button4 = useRef(null);

  const cleanClass = () => {
    button1.current.className = '';
    button2.current.className = '';
    button3.current.className = '';
    button4.current.className = '';
  };

  const handleChange = (e, value = 'all') => {
    cleanClass();
    e.target.className = 'active';
    if (value === 'all') {
      setFilteredProjects(projects);
    }

    if (value === 'easy') {
      const filter = [];
      projects.forEach((element) => {
        if (element.difficulty === value) {
          filter.push(element);
        }
      });
      setFilteredProjects(filter);
    }

    if (value === 'medium') {
      const filter = [];
      projects.forEach((element) => {
        if (element.difficulty === value) {
          filter.push(element);
        }
      });
      setFilteredProjects(filter);
    }
    if (value === 'hard') {
      const filter = [];
      projects.forEach((element) => {
        if (element.difficulty === value) {
          filter.push(element);
        }
      });
      setFilteredProjects(filter);
    }
  };

  useEffect(() => {
    setProject(filteredProjects);
  }, [filteredProjects]);

  return (
    <>
      <Header menu={menu} />
      <main>
        <Styled.SectionDiv>
          <div className="mainContainer">
            <div className="buttonContainer">
              <button
                type="button"
                onClick={(e) => handleChange(e, 'all')}
                className="button active"
                ref={button1}
              >
                Todos
              </button>
              <button
                type="button"
                onClick={(e) => handleChange(e, 'easy')}
                ref={button2}
              >
                Facil
              </button>
              <button
                type="button"
                onClick={(e) => handleChange(e, 'medium')}
                ref={button3}
              >
                Médio
              </button>
              <button
                type="button"
                onClick={(e) => handleChange(e, 'hard')}
                ref={button4}
              >
                Difícil
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
