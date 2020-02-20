import React from 'react';
import Layout from '../../components/Layout';
import { Paragraph, ColorBlock, WhiteBlock, H1, H1Reverse } from '../../styles';
import { ProfileLink, ProgressBar, Scrollable, CenterDiv, Unscrollable, HomeDiv } from './styles';
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
      <HomeDiv>
        <ColorBlock>
          <H1>About Me</H1>
          <Unscrollable>
            <Paragraph>{this.props.user.basics.summary}</Paragraph>
          </Unscrollable>
        </ColorBlock>
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
                        styles={buildStyles({ pathTransition: "none", textSize: '11px', pathColor: '#5918df', textColor: '#988e9f' })}
                      />
                    );
                  }}
                </AnimatedProgressProvider>
              </ProgressBar>
            ))}
          </Scrollable>
        </WhiteBlock>
        <WhiteBlock>
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
        </WhiteBlock>
      </HomeDiv>
    );
  }
}

export default Home;