import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, AboutMe, H1Reverse, ColorBlock, Screwc, Screwcc, H1Alone } from '../../styles';
import { EducationItem, Institution, Degree, Experience } from './styles';


class Education extends React.Component {
  constructor({ user }) {
    super(user);
    this.setState({ user });
  }
  render() {
    return (
      <Layout user={this.props.user}>
       <H1Alone>Education</H1Alone>
        <ul>
          {this.props.user.education.map((education, i) => (
            <EducationItem key={i}>
              <Screwc></Screwc>
              <ColorBlock>
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
              </ColorBlock>
              <Screwcc></Screwcc>
            </EducationItem>
          ))}
        </ul>
      </Layout>
    )
  }
}


export default Education;

