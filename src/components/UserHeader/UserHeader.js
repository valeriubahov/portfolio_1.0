import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight16 } from '@carbon/icons-react';
import { AboutMe, Paragraph, SectionTitle } from '../../styles';

import { HeaderContainer, Div, Header, Image, ViewResumeLink } from './styles';

const UserHeader = ({ user }) => {
  const location = useLocation();

  return (
    <HeaderContainer isHome={location.pathname !== '/home'}>
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


      {/* <div>
        <ViewResumeLink
          href={`https://drive.google.com/open?id=1959FAnB_5RAOQFvMSWlw6YZ5jl3GtRVP`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Résumé</span>
          <ArrowRight16 />
        </ViewResumeLink>
      </div> */}

    </HeaderContainer>
    
  );
};

export default UserHeader;