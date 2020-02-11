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
import { SocialIcon } from 'react-social-icons';


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
          <Scrollable>
            <Paragraph>{this.props.user.basics.summary}</Paragraph>
          </Scrollable>
        </AboutMe>
      
        <AboutMe>
          <SectionTitle>Skills</SectionTitle>
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
                          styles={buildStyles({ pathTransition: "none", textSize: '11px' })}
                        />
                      );
                    }}
                  </AnimatedProgressProvider>
                </ProgressBar>
              ))}
            </Scrollable>
          </CenterDiv>
        </AboutMe>
       
        <AboutMe>
          <SectionTitle>Profiles</SectionTitle>
          <Scrollable>
            <ul>
              {this.props.user.basics.profiles.map((profile, i) => (
                <ProfileLink key={profile.network}>
                  {i !== 0 && ''}
                  <SocialIcon url={profile.url} />
                </ProfileLink>
              ))}
            </ul>
          </Scrollable>
        </AboutMe>
      </Layout>
    );
  }
}

export default Home;