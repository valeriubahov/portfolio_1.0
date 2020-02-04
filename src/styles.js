import styled from 'styled-components';
import { blue } from '@carbon/colors';

export const SectionTitle = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const Paragraph = styled.p`
display: inline-block;
vertical-align: middle;
line-height: normal;
`;

export const AboutMe = styled.div`
margin: auto;
height: 50%;
width: 80%;
line-height: 100px;
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