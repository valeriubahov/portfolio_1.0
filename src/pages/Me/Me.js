import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { ProfileLink, ProgressBar, Scrollable, CenterDiv } from './styles';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Me = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>About Me</SectionTitle>
        <Paragraph>{user.basics.summary}</Paragraph>
      </div>
      <div>
        <SectionTitle>Skills</SectionTitle>
        <CenterDiv>
        <Scrollable>
          {user.skills.map((skill, i) => (
            <ProgressBar key={i} style={{ width: 142 }}>
              <CircularProgressbarWithChildren value={skill.rating * 20}>
                <div style={{ fontSize: 16 }}>
                  <div key={skill.name}>{skill.rating * 20}% {skill.name}</div>
                </div>
              </CircularProgressbarWithChildren>
            </ProgressBar>
          ))}
        </Scrollable>
        </CenterDiv>
      </div>
      <div>
        <SectionTitle>Profiles</SectionTitle>
        <ul>
          {user.basics.profiles.map((profile, i) => (
            <ProfileLink key={profile.network}>
              {i !== 0 && ' | '}
              <a href={profile.url} target="_blank" rel="noreferrer noopener">
                {profile.network}
              </a>
            </ProfileLink>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Me;