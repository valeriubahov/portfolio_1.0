import React from 'react'
import { User32, Portfolio32, Education32, Document32 } from '@carbon/icons-react'

import { Container, Spacer, NavWrapper, NavButton, NavLink, NavResume } from './styles'

const MobileNav = () => {
  return (
    <Container>
      <Spacer />
      <NavWrapper>
        <NavLink to="/">
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
        <NavResume href={`https://drive.google.com/open?id=1959FAnB_5RAOQFvMSWlw6YZ5jl3GtRVP`}>
          <NavButton
            hasIconOnly
            renderIcon={Document32}
            iconDescription="View Résumé"
            tooltipPosition="bottom"
          />
        </NavResume>
      </NavWrapper>
    </Container>
  )
}

export default MobileNav