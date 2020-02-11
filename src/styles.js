import styled from 'styled-components';
import { blue } from '@carbon/colors';
import { gray } from '@carbon/colors';

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

export const ColorBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  background:#474B4F;
  color:#fff;
  text-align: center;
  color: white;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 25px;
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  margin-top: 0rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  padding-left:0.5rem;
  `;

  export const WhiteBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  background: #222629;
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
  font-size: 70px;
  color: #86C232;
  font-family: 'wire one',serif;
  font-weight: normal;
  `;

  export const H1Alone = styled.h1`
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  font-size: 60px;
  color: #86C232;
  font-family: 'wire one',serif;
  font-weight: normal;
  `;


  export const H1Reverse = styled.h1`
  position: relative;
  text-align: center;
  font-size: 70px;
  color: white;
  font-family: 'wire one',serif;
  font-weight: normal;
  `;

export const Screwcc = styled.div`
  width:100%;
  height:100px;
  position:relative;
  left:0px;
  background: linear-gradient(to right bottom,#474B4F 49%, #222629 50%),linear-gradient(-50deg,#222629 16px,#000 0);
  `;


export const Screwc = styled.div`
  width:100%;
  height:100px;
  position:relative;
  left:0px;
  background: linear-gradient(to left bottom,#222629 49%,#474B4F 50%);
  `;