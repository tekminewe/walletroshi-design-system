import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';

const StyledNavTitle = styled(NavItem)`
  font-size: 1.5em;
`

const NavTitle = ({ children }) => {
  return (
    <StyledNavTitle>
      {children}
    </StyledNavTitle>
  )
}

export default NavTitle;
