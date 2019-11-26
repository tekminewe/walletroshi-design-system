import React from 'react';
import styled from 'styled-components';

import NavItem from './NavItem';

const StyledNavbar = styled.nav`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 81px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
`

const Navbar = ({ children }) => {
  return (
    <StyledNavbar>
      {children}
    </StyledNavbar>
  )
}

Navbar.Item = NavItem;

export default Navbar;
