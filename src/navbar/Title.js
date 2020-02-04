import React from 'react';
import styled from 'styled-components';
import NavItem from './Item';

const StyledNavTitle = styled(NavItem)`
  font-size: 1.5em;
  padding: 0;
  margin: 0;

  :hover {
    border-bottom: unset;
  }
`

const NavTitle = ({ children }) => {
  return (
    <StyledNavTitle>
      {children}
    </StyledNavTitle>
  )
}

export default NavTitle;