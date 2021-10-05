import React from 'react';
import { SideNavLink } from 'carbon-components-react/lib/components/UIShell';
import { Header, Menu } from './styles';
import { Link } from 'react-scroll';


const items = [
  { name: 'HOME', path: 'home' },
  { name: 'ABOUT US', path: 'about' },
  { name: 'CONTACTS', path: 'work' },

];

const Sidebar = ({ user }) => {
  return (

    <Header>
      <Menu>
        {items.map(i => (
          <SideNavLink
            element={Link}
            to={i.path}
            key={i.name}
            spy={true}
            smooth={true}
            duration={500}
          >
            {i.name}
          </SideNavLink>
        ))}
      </Menu>
    </Header>
  );
};

export default Sidebar;