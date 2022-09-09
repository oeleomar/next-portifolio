import P from 'prop-types';
import { useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';
import * as Styled from './styles';

export const TagCloudComponent = () => {
  const ref = useRef();
  useEffect(() => {
    const container = '.Sphere';
    const texts = [
      'React',
      'Javascript',
      'Node.js',
      'CSS3',
      'HTML',
      'JSX',
      'Styled-Components',
      'Express',
      'MongoDB',
      'MySQL',
      'PostgreeSQL',
      'WEB',
      'Routes',
      'Next.js',
      'Animations',
      'Git',
      'Github',
      'API',
      'RestAPI',
      'CSS-IN-JS',
    ];
    const options = {
      radius: window.screen.width > 1440 ? 350 : 280,
      maxSpeed: 'normal',
      initSpeed: 'fast',
      direction: 45,
      keep: true,
    };
    console.log(options.radius);
    TagCloud(container, texts, options);
  }, []);

  return (
    <Styled.Container>
      <span className="Sphere" ref={ref} />
    </Styled.Container>
  );
};
