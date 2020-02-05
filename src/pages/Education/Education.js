import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, AboutMe } from '../../styles';
import { EducationItem, Institution, Degree } from './styles';


class Education extends React.Component {
  constructor({ user }) {
    super(user);
    this.setState({ user });
  }
  render() {
    return (
      <Layout user={this.props.user}>
        <AboutMe>
          <SectionTitle>Education</SectionTitle>
          <ul>
            {this.props.user.education.map((education, i) => (
              <EducationItem key={i}>
                <Institution>{education.position}</Institution>
                <div>
                  <Degree>
                    {education.studyType}, {education.area}
                  </Degree>{' '}
                  <span> &sdot; </span>
                  {education.end.year !== '' && (
                  <span>
                    {education.start.year} to {education.end.year}
                  </span>
                  )}
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

