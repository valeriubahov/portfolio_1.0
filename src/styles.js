import styled from 'styled-components';
import { blue } from '@carbon/colors';
import { gray } from '@carbon/colors';

export const SectionTitle = styled.h3`
position:relative;
top:48px;
display: inline-block;
margin-bottom: 0.5rem;
white-space: nowrap;
margin-top: 2rem;
background: #161616;
color: white;
border-left: 0px solid ${gray[90]};
border-right: 0px solid ${gray[90]};
border-top: 0px solid ${gray[90]};
border-radius: 16px 16px 0px 0px;
`;

export const Paragraph = styled.p`
display: inline-block;
vertical-align: middle;
line-height: normal;
white-space: pre-line;
`;

export const AboutMe = styled.div`
margin: auto;
height: 20%;
width: 100%;
line-height: 30px;
vertical-align: middle;
text-align: center;
`;

export const Pill = styled.span`
  display: inline-block;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
  padding: 0.5rem 1rem;
  background-color: ${blue[20]};
  color: ${blue[70]};
  border: 3px solid ${blue[70]};
  border-radius: 2px;
  font-weight: bold;
`;