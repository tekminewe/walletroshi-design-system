import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.div`
  display: flex;
  flex-direction: row;
`

const Nav = ({ children }) => {
  return (
    <StyledNav>
      {children}
    </StyledNav>
  )
}

export default Nav;
