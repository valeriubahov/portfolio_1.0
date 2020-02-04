import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: ${({ isHome }) => (isHome ? 'none' : 'flex')};
  justify-content: space-between;
  @media (max-width: 640px) {
    display: ${({ isHome }) => (isHome ? 'none' : 'flex')};
    flex-direction: column;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 50%;
  margin-bottom: 50px;
  border: 1vh solid #232d3622;
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


