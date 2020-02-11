import React from 'react';
import Layout from '../../components/Layout';
import { Paragraph, Screwc, Screwcc, ColorBlock, WhiteBlock, H1, H1Reverse } from '../../styles';
import { ProfileLink, ProgressBar, Scrollable, CenterDiv, Unscrollable } from './styles';
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
        <Screwc></Screwc>

        {/* INTESTAZIONE */}
        <ColorBlock>
          <H1>About Me</H1>
          <Unscrollable>
            <Paragraph>{this.props.user.basics.summary}</Paragraph>
          </Unscrollable>
        </ColorBlock>
        <Screwcc></Screwcc>

        {/* SKILLS */}
        <WhiteBlock>
          <H1Reverse>Skills</H1Reverse>
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
                        styles={buildStyles({ pathTransition: "none", textSize: '11px', pathColor: '#86C232', textColor: '#86C232' })}
                      />
                    );
                  }}
                </AnimatedProgressProvider>
              </ProgressBar>
            ))}
          </Scrollable>
        </WhiteBlock>
        <Screwc></Screwc>

        {/* Social */}
        <ColorBlock>
          <H1>Profiles</H1>
          <CenterDiv>
            <Unscrollable>
              <ul>
                {this.props.user.basics.profiles.map((profile, i) => (
                  <ProfileLink key={profile.network}>
                    {i !== 0 && ''}
                    <SocialIcon url={profile.url} />
                  </ProfileLink>
                ))}
              </ul>
            </Unscrollable>
          </CenterDiv>
        </ColorBlock>

        <Screwcc></Screwcc>
      </Layout>
    );
  }
}

export default Home;