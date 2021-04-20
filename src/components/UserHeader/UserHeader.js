import React from 'react';
import { useLocation } from 'react-router-dom';
import Typical from 'react-typical';
import { HeaderContainer, H1, P, Scrollable, CenterDiv, AboutMe, H1Reverse} from './styles';

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
          <Scrollable>
            <H1>Hi,</H1>
            <H1>my name is</H1>
            <br></br>
              <H1Reverse>{user.basics.name}</H1Reverse>
            <br></br>
            <CenterDiv>
              <H1>I am a</H1>
            </CenterDiv>
            <CenterDiv>
          <Typical
            steps={steps}
            loop={Infinity}
            wrapper="b"
          />
        </CenterDiv>
            <P>Based in {user.basics.region}</P>
            <P>With {user.basics.yearsOfExperience} years of experience as a Developer</P>
            <P>{user.basics.headline}</P>
          </Scrollable>
          
      </AboutMe>
    
      </HeaderContainer>
  
  );
};

export default UserHeader;