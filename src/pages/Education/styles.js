import styled from 'styled-components'
import { gray } from '@carbon/colors';

export const EducationItem = styled.li`
color: white;
font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
font-size: 25px;
letter-spacing: 2px;
font-weight: 400;
font-style: normal;
font-variant: normal;
text-transform: none;
padding-bottom: 1rem;
padding-top: 1rem;

`
export const Experience = styled.div`
position:relative;
top:15px;
display: inline-block;
`

export const Institution = styled.h4`
font-weight: bold;
`

export const Degree = styled.p`
top:15px;
text-align:center;
font-size: 30px;
color: #988e9f;
font-family:'wire one', serif;
font-weight:normal;
`;

export const ExperienceDiv = styled.div`
background-image: linear-gradient(-180deg,#0e0c16,#1a1527 88%,#1a1527 99%);
position: relative;
overflow: hidden;
height: auto;
width: 100%;
padding-right: 15px;
padding-left: 15px;
margin-right: auto;
margin-left: auto;
padding-top: 5rem;
`;