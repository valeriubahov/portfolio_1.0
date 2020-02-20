import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, AboutMe, H1Reverse, WhiteBlock, Screwc, Screwcc, H1Alone } from '../../styles';
import { EducationItem, Institution, Degree, ExperienceDiv } from './styles';


class Education extends React.Component {
  constructor({ user }) {
    super(user);
    this.setState({ user });
  }
  render() {
    return (
      <ExperienceDiv>
       <H1Alone>Education</H1Alone>
        <ul>
          {this.props.user.education.map((education, i) => (
            <EducationItem key={i}>
              {/* <Screwc></Screwc> */}
              <WhiteBlock>
                <Institution>{education.position}</Institution>
                <div>
                  <Degree>
                    {education.studyType}, {education.area}
                  </Degree>{' '}
                  <div>
                    {education.end.year !== '' && (
                      <Paragraph>From {education.start.year} to {education.end.year}</Paragraph>
                    )}
                  </div>
                </div>
                <Paragraph>{education.description.replace('\n\n', '\n')}</Paragraph>
              </WhiteBlock>
              {/* <Screwcc></Screwcc> */}
            </EducationItem>
          ))}
        </ul>
      </ExperienceDiv>
    )
  }
}


export default Education;

