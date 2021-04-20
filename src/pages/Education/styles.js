import styled from 'styled-components';

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
color: white;
font-family:'wire one', serif;
font-weight:normal;
`;

export const ExperienceDiv = styled.div`
background-color:#1a1d1e;
max-width: 83%;
@media (max-width: 640px) {
    max-width: 100%;
  }
margin-left: auto;
margin-right: auto;
position: relative;
display: flex;
flex-direction: column;
overflow: hidden;
align-items: center;
justify-content: center;
padding-top:4.5rem;
padding-bottom:4.5rem;
`;


export const WhiteBlockEdu = styled.div`
display: flex;
flex-direction: column;
margin: auto;
text-align: center;
color: white;
font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
font-size: 25px;
font-weight: 400;
font-style: normal;
font-variant: normal;
text-transform: none;
padding-bottom: 1rem;
padding-top: 3rem;
padding-left:0.5rem;
`;
