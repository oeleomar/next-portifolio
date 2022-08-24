import P from 'prop-types';
import * as Styled from './styles';
import Link from 'next/link';

export const NavLinks = ({ links = {} }) => {
  const { menu_links } = links;
  return (
    <Styled.NavBar>
      <ul>
        {menu_links.map((link) => {
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
};

NavLinks.propTypes = {
  links: P.object,
};
