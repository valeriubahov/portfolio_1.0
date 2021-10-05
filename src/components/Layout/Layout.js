import React from 'react';
import Sidebar from '../Sidebar';
import MobileNav from '../MobileNav';

import { StyledContent } from './styles';

const Layout = ({ user, children }) => {
  return (
    <>
      <StyledContent>
        <div>{children}</div>
      </StyledContent>
    </>
  );
};

export default Layout;