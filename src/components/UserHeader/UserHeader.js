import React from 'react';
import { useLocation } from 'react-router-dom';
import { AboutMe } from '../../styles';
import Typical from 'react-typical';
import { HeaderContainer, Div, H1Reverse, P, Scrollable, CenterDiv } from './styles';

const steps = [
  "Frontend Developer", 1000,
  "React Developer", 1000,
  "Backend Developer", 1000,
  "Full-stack Developer", 1000
];
const UserHeader = ({ user }) => {
  const location = useLocation();
  return (
    <HeaderContainer isHome={location.pathname !== '/'}>
      <AboutMe>
        <Div>
          <Scrollable>
            <H1Reverse>{user.basics.name}</H1Reverse>
            <br></br>
            <CenterDiv>
          <Typical
            steps={steps}
            loop={Infinity}
            wrapper="b"
          />
        </CenterDiv>
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