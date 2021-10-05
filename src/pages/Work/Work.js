import React from 'react';
import { Paragraph, H1, P1 } from '../../styles';
import { WorkItem, WorkTitle, JobTitle, WorkDiv, JsImg, BackendImg, WhiteBlock } from './styles';

const Work = ({ user }) => {
  return (
    <WorkDiv>
      <H1>Get a quote</H1>
      <WorkItem>
        <WhiteBlock>
          <Paragraph>We proudly service the greater area of the HRM.</Paragraph>
          <P1>CALL <a href="tel:+19024405615" class="headerContactItem">902-440-5615</a></P1>
          <P1>EMAIL <a href="mailto:bahovvaleriu@gmail.com">bahovvaleriu@gmail.com</a></P1>
        </WhiteBlock>
      </WorkItem>
    </WorkDiv>
  );
};

export default Work;