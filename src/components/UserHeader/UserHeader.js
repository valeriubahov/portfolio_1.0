import React from 'react';
import { useLocation } from 'react-router-dom';
import { AboutMe } from '../../styles';

import { HeaderContainer, Div, H1Reverse, P, Scrollable } from './styles';

const UserHeader = ({ user }) => {
  const location = useLocation();
  return (
    <HeaderContainer isHome={location.pathname !== '/'}>
      <AboutMe>
        <Div>
          <Scrollable>
            <H1Reverse>{user.basics.name}</H1Reverse>
            <br></br>
            <P>{user.basics.label}</P>
            <P>Location {user.basics.region}</P>
            <P>{user.basics.yearsOfExperience} years of experience as a Software Developer</P>
            <P>{user.basics.headline}</P>
          </Scrollable>
        </Div>
      </AboutMe>
    </HeaderContainer>
  );
};

export default UserHeader;