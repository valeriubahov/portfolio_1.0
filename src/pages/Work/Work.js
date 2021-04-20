import React from 'react';
import { Paragraph, H1 } from '../../styles';
import { WorkItem, WorkTitle, JobTitle, WorkDiv, JsImg, BackendImg, WhiteBlock } from './styles';

const Work = ({ user }) => {
  return (
    <WorkDiv>
      {/* <JsImg /> */}
      <H1>Experience</H1>
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
      {/* <BackendImg /> */}
    </WorkDiv>
  );
};

export default Work;