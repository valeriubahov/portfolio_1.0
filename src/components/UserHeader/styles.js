import styled from 'styled-components';
import { gray } from '@carbon/colors';

export const HeaderContainer = styled.div`
  display: ${({ isHome }) => (isHome ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    display: ${({ isHome }) => (isHome ? 'none' : 'flex')};
    flex-direction: column;
  }
`;

export const Image = styled.img`
  position:relative;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
`;

export const Scrollable = styled.div`
display: inline-block;
vertical-align: middle;
line-height: normal;
white-space: pre-line;
color: white;
width: 100%;
height: 100%;
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

export const Div = styled.div`
position:relative;
display: inline-block;
white-space: nowrap;
color: white;
margin-top: 0rem;
padding-bottom: 1rem;
padding-top: 1rem;
padding-left:0.5rem;
border-radius: 16px 16px 16px 16px;
`;

export const H1Reverse = styled.h1`
text-align:center;
font-size:70px;
color: #5918df;
font-family:'wire one', serif;
font-weight:normal;
`;

export const P = styled.p`
`;

export const CenterDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: #5918df;
font-size: 15px;
word-spacing: 2px;
font-weight: 400;
font-weight: bold;
`;


