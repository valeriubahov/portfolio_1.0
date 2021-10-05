import styled from 'styled-components';


export const HeaderContainer = styled.div`
  display: ${({ isHome }) => (isHome ? 'none' : 'flex')};
  position:relative;
  flex-direction: column;
  background-color: white;
  background-size: cover;
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

  @media (max-width: 640px) {
    display: ${({ isHome }) => (isHome ? 'none' : 'flex')};
    background-size: cover;
    padding-top: 3rem;
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
font-weight: 700;
color: #08b7dd;
font-family:'wire one', serif;
font-weight:normal;
`;

export const H1 = styled.h1`
text-align:center;
font-size:50px;
font-weight: 700;
color: black;
font-family:'wire one', serif;
font-weight:normal;
padding-top:1rem;
padding-bottom:1rem;
`;

export const Name = styled.strong`
color: #5918df;
`;

export const P = styled.p`
color:black;
font-weight:700;
`;

export const CenterDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: #08b7dd;
font-size: 30px;
word-spacing: 2px;
font-weight: 400;
font-weight: bold;
margin-top: 2rem;
`;

export const AboutMeImg = styled.div`
display: inline-block;
vertical-align: middle;
line-height: normal;
white-space: pre-line;
color: white;
background-repeat: no-repeat;
background-size: contain;
height: 100vh;
width: 100%;
background-position: center;
@media (max-width: 640px) {
  height: 50vh;
}
`;


export const AboutMe = styled.div`

width: 60%;
line-height: 30px;
vertical-align: top;
text-align: center;
`;


