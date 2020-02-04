import React from 'react'
import { User32, Home32, Portfolio32, Education32 } from '@carbon/icons-react'

import { Container, Spacer, NavWrapper, NavButton, NavLink } from './styles'

const MobileNav = () => {
  return (
    <Container>
      <Spacer />
      <NavWrapper>
      <NavLink to="/">
          <NavButton
            hasIconOnly
            renderIcon={Home32}
            iconDescription="Home"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/home">
          <NavButton
            hasIconOnly
            renderIcon={User32}
            iconDescription="About me"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/work">
          <NavButton
            hasIconOnly
            renderIcon={Portfolio32}
            iconDescription="Experience"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/education">
          <NavButton
            hasIconOnly
            renderIcon={Education32}
            iconDescription="Education"
            tooltipPosition="bottom"
          />
        </NavLink>
      </NavWrapper>
    </Container>
  )
}

export default MobileNav