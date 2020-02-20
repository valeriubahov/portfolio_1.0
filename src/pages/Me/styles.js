import styled from 'styled-components';

export const About = styled.div`
background-image: linear-gradient(-180deg,#1a1527,#0e0c16 88%,#0e0c16 99%);
position: relative;
overflow: hidden;
height: auto;
min-height: 560px;
width: 100%;
margin-right: auto;
margin-left: auto;
`;

export const Offseted = styled.div`
padding-top: 0;
flex: 0 0 75%;
max-width: 75%;
position: relative;
width: 100%;
padding-right: 15px;
padding-left: 15px;

@media (min-width: 576px) {
    margin-left: 16.666667%;
  }
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

export const Title = styled.small`
font-size: 18px;
font-weight: 300;
color: #988e9f;
position: relative;
margin-top: 30px;
display: inline-block;
& > :before {
    content: "";
    position: absolute;
    left: -29px;
    top: 9px;
    z-index: 10;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    border: 2px solid #5918df;
    background-color: #1b191e;
}
`;

export const Mt3 = styled.div`
margin-top: 1rem!important;
`;

export const CodeWrapper = styled.div`
font-family: Roboto Mono,Courier New,Courier,monospace!important;
font-size: 16px;
line-height: 1.6;
`;

export const Code1 = styled.div`
& > :after {
content: attr(data-line-nr);
    position: absolute;
    left: -60px;
    color: #3b3553;
    font-family: Roboto Mono,Courier New,Courier,monospace!important;
    font-size: 16px;
    line-height: 1.6;
    z-index: 3;
    top: 0;
}
`;

export const Methods = styled.div`
color: cornflowerblue;
display: inline;
`;

export const Dot = styled.div`
color: #14121c;
display: inline;
`;

export const Span = styled.span`
color: #24e394;
`;

export const Span1 = styled.span`
color: aqua;
`;

export const String = styled.span`
color: coral;
`;

export const Return = styled.div`
color: violet;
display: inline;
`;

export const MenuDiv = styled.div`
transition: all 1s cubic-bezier(.165,.84,.44,1);
padding: 1rem 1.5rem;
position: absolute;
    top: 0;
    left: 0;
    right: 0;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s,-webkit-transform .3s;
    height: 4rem;
    position: fixed;
    right: 0;
    left: 0;
    z-index: 1030;
`;

