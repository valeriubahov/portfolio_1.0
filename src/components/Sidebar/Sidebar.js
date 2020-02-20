import React from 'react';
import { SideNavItems, SideNavLink } from 'carbon-components-react/lib/components/UIShell';
import { StyledSideNav, Image, ViewResumeLink, CenterDiv } from './styles';
import Typical from 'react-typical';
import {Link} from 'react-scroll';


const items = [
  { name: 'Home', path: 'home' },
  { name: 'Experience', path: 'work' },
  { name: 'Education', path: 'education' },
  { name: 'About Me', path: 'about' },
];

const steps = [
  "Frontend Developer", 1000,
  "React Developer", 1000,
  "Backend Developer", 1000,
  "Full-stack Developer", 1000
];


const Sidebar = ({ user }) => {
  return (
    <StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side navigation">
      <SideNavItems>
        <Image src={user.basics.picture} />
        {/* <CenterDiv>
          <Typical
            steps={steps}
            loop={Infinity}
            wrapper="b"
          />
        </CenterDiv> */}
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
        <ViewResumeLink
          href={`https://drive.google.com/open?id=1EafRTLOaEbjYBgckBIfArwJmMjRC241J`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Resume</span>
        </ViewResumeLink>
      </SideNavItems>
    </StyledSideNav>
  );
};

export default Sidebar;