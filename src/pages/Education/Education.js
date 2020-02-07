import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, AboutMe } from '../../styles';
import { EducationItem, Institution, Degree, Experience } from './styles';


class Education extends React.Component {
  constructor({ user }) {
    super(user);
    this.setState({ user });
  }
  render() {
    return (
      <Layout user={this.props.user}>
        <AboutMe>
       <Experience>
          <SectionTitle>Education</SectionTitle>
          </Experience>
          <ul>
            {this.props.user.education.map((education, i) => (
              <EducationItem key={i}>
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
              </EducationItem>
            ))}
          </ul>
        </AboutMe>
      </Layout>
    )
  }
}


export default Education;

