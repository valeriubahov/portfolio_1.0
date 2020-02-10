import styled from 'styled-components';
import { gray } from '@carbon/colors';


export const WorkItem = styled.li`
  background: #161616;
  color: white;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 25px;
  letter-spacing: 2px;
  word-spacing: 2px;
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  margin-top: 3rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  border-bottom: 0px solid ${gray[90]};
  border-left: 0px solid ${gray[90]};
  border-right: 0px solid ${gray[90]};
  border-top: 0px solid ${gray[90]};
  border-radius: 16px 16px 16px 16px;
`
export const Experience = styled.div`
position:relative;
top:48px;
display: inline-block;
`

export const WorkTitle = styled.h4`
  font-weight: bold;
`

export const JobTitle = styled.p`
  font-weight: bold;
  display: inline-block;
`