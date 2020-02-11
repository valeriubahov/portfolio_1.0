import React from 'react';
import Layout from '../../components/Layout';
import { Paragraph, AboutMe, Screwc, Screwcc, ColorBlock, H1Reverse, H1Alone } from '../../styles';
import { WorkItem, WorkTitle, JobTitle, Div, Unscrollable } from './styles';

const Work = ({ user }) => {
  return (
    <Layout user={user}>
      <H1Alone>Experience</H1Alone>
      <Unscrollable>
        <ul>
          {user.work.map((work, i) => (
            <WorkItem key={i}>
              <Screwc></Screwc>
              <ColorBlock>
                <WorkTitle>{work.position}</WorkTitle>
                <br></br>
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
              </ColorBlock>
              <Screwcc></Screwcc>

            </WorkItem>
          ))}
        </ul>
      </Unscrollable>
    </Layout>
  );
};

export default Work;