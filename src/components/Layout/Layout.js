import React from 'react';
import Sidebar from '../Sidebar';
import MobileNav from '../MobileNav';

import { StyledContent } from './styles';

const Layout = ({ user, children }) => {
  return (
    <>
      <MobileNav user={user}/>
      <Sidebar user={user}/> 
      <StyledContent>
        <div>{children}</div>
      </StyledContent>
    </>
  );
};

export default Layout;