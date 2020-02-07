import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SideNavItems, SideNavLink } from 'carbon-components-react/lib/components/UIShell';

import { StyledSideNav, Image, CenterDiv } from './styles';

const items = [
  { name: 'Home', path: '/' },
  { name: 'About me', path: '/home' },
  { name: 'Experience', path: '/work' },
  { name: 'Eduction', path: '/education' },
];


const Sidebar = ({ user }) => {
  const location = useLocation();

  return (
    <StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side navigation">
      <SideNavItems>
        <CenterDiv>
          <Image src={user.basics.picture} />
          </CenterDiv>
        {items.map(i => (
          <SideNavLink
            isActive={
              location.pathname === '/home' && i.path === '/home' ? true : location.pathname === i.path
            }
            element={Link}
            to={i.path}
            key={i.name}
          >
            {i.name}
          </SideNavLink>
        ))}
      </SideNavItems>
    </StyledSideNav>
  );
};

export default Sidebar;