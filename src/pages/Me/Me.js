import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, Pill } from '../../styles';
import { ProfileLink, ProgressBar, Scrollable } from './styles';
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
        <Scrollable>
          {user.skills.map((skill, i) => (
            <ProgressBar key={i}>
              <CircularProgressbarWithChildren value={skill.rating * 20}>
                <div style={{ fontSize: 10 }}>
                  <Pill key={skill.name}>{skill.rating * 20}% {skill.name}</Pill>
                </div>
              </CircularProgressbarWithChildren>
            </ProgressBar>
          ))}
        </Scrollable>
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