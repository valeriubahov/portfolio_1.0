import styled from 'styled-components';
import { gray } from '@carbon/colors';

export const ProfileLink = styled.li`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  font-size: 18px;
`;

export const ProgressBar = styled.div`
margin-right: 1rem;
margin-bottom: 1rem;
display: inline-block;
width: 100%;
`;

export const Scrollable = styled.div`
overflow-x: none;
overflow-y: hidden;
white-space: nowrap;
background: #161616;
color: white;
width: 100%;
height: 100%;
margin-top: 0rem;
padding-bottom: 1rem;
padding-top: 1rem;
padding-left:0.5rem;
border-bottom: 2px solid ${gray[90]};
border-left: 2px solid ${gray[90]};
border-right: 2px solid ${gray[90]};
border-top: 2px solid ${gray[90]};
border-radius: 16px 16px 16px 16px;
`;

export const CenterDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

