import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { ProfileLink, ProgressBar, Scrollable, CenterDiv } from './styles';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
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

        {/* <CenterDiv>
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
        </CenterDiv> */}

        <CenterDiv>
          <Scrollable>
            {user.skills.map((skill, i) => (
              <ProgressBar key={i} style={{ width: 150 }}>
                <AnimatedProgressProvider
                  valueStart={0}
                  valueEnd={skill.rating * 20}
                  duration={3}
                  easingFunction={easeQuadInOut}
                >
                  {value => {
                    const roundedValue = Math.round(value);
                    return (
                      <CircularProgressbar
                        value={value}
                        text={`${roundedValue}% ${skill.name}`}
                        /* This is important to include, because if you're fully managing the
                        animation yourself, you'll want to disable the CSS animation. */
                        styles={buildStyles({ pathTransition: "none", textSize: '11px' })}
                      />
                    );
                  }}
                </AnimatedProgressProvider>
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