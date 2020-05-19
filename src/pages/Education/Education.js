import React from 'react';
import { Paragraph, H1Alone } from '../../styles';
import { EducationItem, Institution, Degree, ExperienceDiv, WhiteBlockEdu } from './styles';


class Education extends React.Component {
  constructor({ user }) {
    super(user);
    this.setState({ user });
  }
  render() {
    return (
      <div>
      <ExperienceDiv>
        <H1Alone>Education</H1Alone>
        <ul>
          {this.props.user.education.map((education, i) => (
            <EducationItem key={i}>
              {/* <Screwc></Screwc> */}
              <WhiteBlockEdu>
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
              </WhiteBlockEdu>
              {/* <Screwcc></Screwcc> */}
            </EducationItem>
          ))}
        </ul>
       
      </ExperienceDiv>
       {/* <WebImg/> */}
       </div>
    )
  }
}


export default Education;

