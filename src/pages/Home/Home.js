import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, AboutMe } from '../../styles';
import { ProfileLink, ProgressBar, Scrollable, CenterDiv } from './styles';
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import 'react-circular-progressbar/dist/styles.css';


class Home extends React.Component {

  constructor({ user }) {
    super({ user });
    this.setState({ user });
  }
  render() {
    return (
      <Layout user={this.props.user}>
        <AboutMe>
          <SectionTitle>About Me</SectionTitle>
          <Paragraph>{this.props.user.basics.summary}</Paragraph>
        </AboutMe>
        <AboutMe>
          <SectionTitle>Skills</SectionTitle>
        </AboutMe>
        <CenterDiv>
          <Scrollable>
            {this.props.user.skills.map((skill, i) => (
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
        <AboutMe>
          <SectionTitle>Profiles</SectionTitle>
          <ul>
            {this.props.user.basics.profiles.map((profile, i) => (
              <ProfileLink key={profile.network}>
                {i !== 0 && ' | '}
                <a href={profile.url} target="_blank" rel="noreferrer noopener">
                  {profile.network}
                </a>
              </ProfileLink>
            ))}
          </ul>
        </AboutMe>
      </Layout>
    );
  }
}

export default Home;