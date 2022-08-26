import P from 'prop-types';
import * as Styled from './styles';

export function ProjectDescription({ data = [] }) {
  return (
    <Styled.Container>
      <ul>
        {data.length <= 4
          ? data.map((tech) => (
              <li key={`${tech.id} ${tech.technologies}`}>
                {tech.technologies}
              </li>
            ))
          : data.map((tech, i) =>
              i <= 4 ? <li>{tech.technologies}</li> : null,
            )}
        {data.length > 4 ? <li key={Math.random()}>Entre Outras</li> : null}
      </ul>
    </Styled.Container>
  );
}

ProjectDescription.propTypes = {
  data: P.array.isRequired,
};
