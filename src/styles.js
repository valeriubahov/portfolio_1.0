import styled from 'styled-components';
import { blue } from '@carbon/colors';

export const SectionTitle = styled.h3`
position:relative;
display: inline-block;
margin-bottom: 0.5rem;
font-size:70px;
white-space: nowrap;
margin-top: 2rem;
color: #86C232;
`;

export const Paragraph = styled.p`
display: inline-block;
color:#FFF;
vertical-align: middle;
white-space: pre-line;
letter-spacing: 0;
text-decoration: none;
text-indent: 0;
text-transform: none;
font-family: proxima-nova,sans-serif;
font-weight: 400;
font-style: normal;
font-size: 1.125rem;
line-height: 1.4;
`;

export const Paragraph1 = styled.p`
display: inline-block;
color:#08b7dd;
vertical-align: middle;
white-space: pre-line;
letter-spacing: 0;
text-decoration: none;
text-indent: 0;
text-transform: none;
font-family: Sharp Sans No2,Arial,sans-serif;
font-weight: 700;
font-style: normal;
font-size: 1rem;
line-height: 1.4;
`;

export const AboutMe = styled.div`
background-image: linear-gradient(-180deg,#1a1527,#0e0c16 88%,#0e0c16 99%);
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

export const ColorBlockStart = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  color: black;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 25px;
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  padding-bottom: 1rem;
  padding-top: 2rem;
  padding-right:0.5rem;
  background-color:#343741;
  float:left;
  `;

export const ColorBlockEnd = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  color: black;
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

export const ColorBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  color: black;
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

export const WhiteBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  color: black;
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

export const WhiteBlockExp = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  background-image: linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(46,204,64,1) 100%);
  color: white;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 25px;
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  margin-top: 2rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  padding-left:0.5rem;
  `;

export const H1 = styled.h1`
  position: relative;
  color:#FFF;
  text-align: center;
  font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0;
    text-decoration: none;
    text-indent: 0;
    text-transform: none;
    font-family: Sharp Sans No2,Arial,sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 3rem;
    line-height: 1.2;
    text-transform: uppercase;
    flex: 0 0 auto;
    margin: 0;
  `;

export const H1Alone = styled.h1`
  position: relative;
  color:white;
  text-align: center;
  font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0;
    text-decoration: none;
    text-indent: 0;
    text-transform: none;
    font-family: Sharp Sans No2,Arial,sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 3rem;
    line-height: 1.2;
    text-transform: uppercase;
    flex: 0 0 auto;
    margin: 0;
  `;


export const H1Reverse = styled.h1`
  position: relative;
  text-align: center;
  font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0;
    text-decoration: none;
    text-indent: 0;
    text-transform: none;
    font-family: Sharp Sans No2,Arial,sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 3rem;
    line-height: 1.2;
    text-transform: uppercase;
    flex: 0 0 auto;
    margin: 0;
  `;

export const Screwcc = styled.div`
  width:100%;
  height:100px;
  position:relative;
  left:0px;
  background: linear-gradient(to right bottom,#14121c  49%, #14121c 50%),linear-gradient(-50deg,#14121c 16px,#000 0);
  `;


export const Screwc = styled.div`
  width:100%;
  height:100px;
  position:relative;
  left:0px;
  background: linear-gradient(to left bottom,#14121c 49%,#14121c  50%);
  `;

export const Timeline = styled.div`
width: 1px;
height: 100%;
left: -10px;
top: 13px;
z-index: 9;
position: absolute;
background-color: #5918df;
`;



export const P1 = styled.p`
display: inline-block;
color:#FFF;
vertical-align: middle;
white-space: pre-line;
letter-spacing: 0;
text-decoration: none;
text-indent: 0;
text-transform: none;
font-family: proxima-nova,sans-serif;
font-weight: 400;
font-style: normal;
font-size: 1.125rem;
line-height: 1.4;
text-size: 50px;
`;