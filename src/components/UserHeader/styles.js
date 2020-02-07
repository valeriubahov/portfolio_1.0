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

export const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  margin-bottom: 50px;
  align-items: center;
  justify-content: center;
  border: 1vh solid #232d3622;
`;

export const Div = styled.div`
position:relative;
display: inline-block;
white-space: nowrap;
background: #161616;
color: white;
margin-top: 0rem;
padding-bottom: 1rem;
padding-top: 1rem;
padding-left:0.5rem;
border-bottom: 2px solid ${gray[90]};
border-left: 2px solid ${gray[90]};
border-right: 2px solid ${gray[90]};
border-top: 2px solid ${gray[90]};
border-radius: 16px 16px 16px 16px;
`;

export const ViewResumeLink = styled.a`
  display: flex;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  align-items: center;
  margin-top: 1rem;
  border: 2px solid #2ecc40;
  background-color: rgba(46, 204, 64, 0.3);
  transition: background-color 250ms ease;
  &:hover {
    background-color: #2ecc40;
  }
  svg {
    fill: white;
    margin-left: 8px;
  }
`;


