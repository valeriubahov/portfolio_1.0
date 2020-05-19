import React from 'react';
import { Paragraph, ColorBlockStart, ColorBlockEnd, WhiteBlock, H1, H1Reverse, Timeline } from '../../styles';
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
        <ColorBlockStart>
          <H1>About Me</H1>
          <Unscrollable>
            <Paragraph>{this.props.user.basics.summary}</Paragraph>
          </Unscrollable>
        </ColorBlockStart>
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
                        styles={buildStyles({ pathTransition: "none", textSize: '11px', pathColor: 'green', textColor: 'white' })}
                      />
                    );
                  }}
                </AnimatedProgressProvider>
              </ProgressBar>
            ))}
          </Scrollable>
        </WhiteBlock>
        <ColorBlockEnd>
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
        </ColorBlockEnd>
        
      </HomeDiv>
    );
  }
}

export default Home;