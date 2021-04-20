import styled from 'styled-components'
import { SideNav } from 'carbon-components-react/lib/components/UIShell'

export const StyledSideNav = styled(SideNav)`
overflow: hidden;
  @media (max-width: 640px) {
    display: none;
  }
`

export const Image = styled.img`
display: inline-block;
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

export const CenterDiv = styled.div`
display: flex;
justify-content: center;
position: fixed;
width: 100vw;
top: 0;
left: 0;
z-index: 1;
`;

export const Header = styled.div`
@media (max-width: 640px) {
  display: none;
}
position: fixed;
background-color: black;
width: 100%;
max-width: 83%;
@media (max-width: 640px) {
  max-width: 100%;
}
z-index: 1;
margin-left: auto;
margin-right: auto;
flex-direction: column;
overflow: hidden;
align-items: center;
justify-content: center;
left: 0;
right: 0;
`;

export const Menu = styled.ul`
display: flex;
align-items: center;
justify-content: center;
position: relative;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;

`;

export const ViewResumeLink = styled.a`
display: flex;
justify-content: center;
align-items: center;
background-image: linear-gradient(to bottom right,#08b7dd,#1773dd);
  outline: 2px solid transparent;
  outline-offset: -2px;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.125rem;
  letter-spacing: 0.16px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  min-height: 4.5rem;
  padding: 0 1rem;
  transition: background-color 250ms ease;
  &:hover {
    background-image: linear-gradient(to bottom right,#1773dd,#1773dd);
  }
  svg {
    fill: white;
    margin-left: 8px;
    align:center;
  }
`;