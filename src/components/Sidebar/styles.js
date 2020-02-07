import styled from 'styled-components'
import { SideNav } from 'carbon-components-react/lib/components/UIShell'

export const StyledSideNav = styled(SideNav)`
display: inline-block;
  @media (max-width: 640px) {
    display: none;
  }
`

export const Image = styled.img`
  align: center;
  display:flex;
  align-items: center;
  justify-content: center;
  border: 1vh solid #232d3622;
`;

export const CenterDiv = styled.div`
display: inline-block;
width: 100%;
align-items: center;
justify-content: center;
`;