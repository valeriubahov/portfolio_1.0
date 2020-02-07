import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, AboutMe } from '../../styles';
import { WorkItem, WorkTitle, JobTitle, Experience } from './styles';

const Work = ({ user }) => {
  return (
    <Layout user={user}>
      <AboutMe>
        <Experience>
          <SectionTitle>Experience</SectionTitle>
        </Experience>
        <ul>
          {user.work.map((work, i) => (
            <WorkItem key={i}>
              <WorkTitle>{work.position}</WorkTitle>
              <JobTitle>{work.company}</JobTitle> <Paragraph>{work.location}</Paragraph>
              <div>
                {work.end.month ? (
                  <Paragraph>From {work.start.month}/{work.start.year} to  {work.end.month}/{work.end.year}</Paragraph>
                ) : (
                    <Paragraph>From {work.start.month}/{work.start.year} to Present</Paragraph>
                  )}
              </div>
              <br></br>
              <Paragraph>{work.summary}</Paragraph>
            </WorkItem>
          ))}
        </ul>

      </AboutMe>
    </Layout>

  );
};

export default Work;