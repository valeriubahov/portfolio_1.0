import React from 'react';
import Layout from '../../components/Layout';
import { Paragraph, AboutMe, Screwc, Screwcc, WhiteBlock, H1Reverse, H1Alone } from '../../styles';
import { WorkItem, WorkTitle, JobTitle, Div, Unscrollable, WorkDiv } from './styles';

const Work = ({ user }) => {
  return (
    <WorkDiv>
      <H1Alone>Experience</H1Alone>
        <ul>
          {user.work.map((work, i) => (
            <WorkItem key={i}>
              <WhiteBlock>
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
              </WhiteBlock>
            </WorkItem>
          ))}
        </ul>
    </WorkDiv>
  );
};

export default Work;