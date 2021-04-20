import styled from 'styled-components';

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
color: white;
width: 100%;
height: 100%;
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


export const Unscrollable = styled.div`
align-items: center;
justify-content: center;
color: white;
width: 100%;
height: 100%;
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

export const CenterDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const HomeDiv = styled.div`
background-image: linear-gradient(to bottom right,#08b7dd,#1773dd);
position: relative;
overflow: hidden;
height: auto;
min-height: 560px;
width: 100%;
margin-right: auto;
margin-left: auto;
padding-top: 4.5rem;
max-width: 83%;
@media (max-width: 640px) {
  max-width: 100%;
}
margin-left: auto;
margin-right: auto;
position: relative;
flex-direction: column;
align-items: center;
justify-content: center;
`;
