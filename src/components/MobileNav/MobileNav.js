import React from 'react'
import { User32, Portfolio32, Education32, Document32, Home32 } from '@carbon/icons-react'
import { Link } from 'react-scroll';
import { Container, Spacer, NavWrapper, NavButton, NavLink, NavResume } from './styles'

const items = [
  { name: 'Home', path: 'home', icon: Home32 },
  { name: 'About Me', path: 'about', icon: User32 },
  { name: 'Experience', path: 'work', icon: Portfolio32 },
  { name: 'Education', path: 'education', icon: Education32 },
];
const MobileNav = () => {
  return (
    <Container>
      <Spacer />
      <NavWrapper>
        {items.map(i => (
       <NavLink
       element={Link}
       to={i.path}
       key={i.name}
       spy={true}
       smooth={true}
       duration={500}
     >
       <NavButton
            hasIconOnly
            renderIcon={i.icon}
            iconDescription={i.name}
            tooltipPosition="bottom"
          />
     </NavLink>
        ))}

        <NavResume href={`https://drive.google.com/open?id=1EafRTLOaEbjYBgckBIfArwJmMjRC241J`}>
          <NavButton
            hasIconOnly
            renderIcon={Document32}
            iconDescription="View Resume"
            tooltipPosition="bottom"
          />
        </NavResume>
      </NavWrapper>
    </Container>
  )
}

export default MobileNav