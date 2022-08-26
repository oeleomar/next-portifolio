import P from 'prop-types';
import Link from 'next/link';
import * as Styled from './styles';

export function NavLinks({ links = {} }) {
  const { menu_links: menuLinks } = links;
  return (
    <Styled.NavBar>
      <ul>
        {menuLinks.map((link) => {
          return (
            <li key={link.link_text}>
              <Link href={link.url}>
                <a>{link.link_text}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Styled.NavBar>
  );
}

NavLinks.propTypes = {
  links: P.object,
};
