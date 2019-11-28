import React from 'react';
import styled from 'styled-components';

const StyledNavItem = styled.a`
  height: 80px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 1rem;

  :hover {
    border-bottom: 1px solid black;
  }
`

const NavItem = ({ children, ...props }, ref) => {
  return (
    <StyledNavItem ref={ref} {...props}>
      {children}
    </StyledNavItem>
  )
}

export default React.forwardRef(NavItem);
