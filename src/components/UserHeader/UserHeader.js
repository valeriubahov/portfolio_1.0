import React from 'react';
import { useLocation } from 'react-router-dom';
import { AboutMe, Paragraph } from '../../styles';

import { HeaderContainer, Div } from './styles';

const UserHeader = ({ user }) => {
  const location = useLocation();
  return (
    <HeaderContainer isHome={location.pathname !== '/'}>
      <AboutMe>
        <Div>
          <Paragraph>
            <h2>{user.basics.name}</h2>
            <p>{user.basics.label}</p>
            <p>Location {user.basics.region}</p>
            <p>{user.basics.yearsOfExperience} years of experience as a Software Developer</p>
            <p>{user.basics.headline}</p>
          </Paragraph>
        </Div>
      </AboutMe>
    </HeaderContainer>
  );
};

export default UserHeader;