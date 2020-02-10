import styled from 'styled-components'
import { SideNav } from 'carbon-components-react/lib/components/UIShell'

export const StyledSideNav = styled(SideNav)`
display: inline-block;
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
align-items: center;
justify-content: center;
color: #3e98c7;
font-size: 15px;
word-spacing: 2px;
font-weight: 400;
font-weight: bold;
`;


export const ViewResumeLink = styled.a`
  background-color: #3e98c7;
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
  min-height: 2rem;
  padding: 0 1rem;
  transition: background-color 250ms ease;
  &:hover {
    background-color: #2ecc40;
  }
  svg {
    fill: white;
    margin-left: 8px;
    align:center;
  }
`;