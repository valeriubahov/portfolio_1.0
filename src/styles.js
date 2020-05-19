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
vertical-align: middle;
line-height: normal;
white-space: pre-line;
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
  background-image: linear-gradient(-180deg,#0e0c16,#1a1527 88%,#1a1527 99%);
  color:#fff;
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
  padding-right:0.5rem;
  `;

  export const ColorBlockEnd = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  background-image:linear-gradient(-180deg,#1a1527,#0e0c16 88%,#0e0c16 99%);
  color:#fff;
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

  export const ColorBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  color:#fff;
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

  export const WhiteBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  color: white;
  background-color: #1a1527;
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
  text-align: center;
  font-size: 55px;
  color: #988e9f;
  font-family: 'wire one',serif;
  font-weight: normal;
  `;

  export const H1Alone = styled.h1`
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  font-size: 55px;
  color: #988e9f;
  font-family: 'wire one',serif;
  font-weight: normal;
  `;


  export const H1Reverse = styled.h1`
  position: relative;
  text-align: center;
  font-size: 55px;
  color: #988e9f; 
  font-family: 'wire one',serif;
  font-weight: normal;
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