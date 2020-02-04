import React from 'react';
import styled from 'styled-components';

const StyledBrand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  :hover {
    cursor: pointer;
  }
`

const Brand = ({ children }) => (
  <StyledBrand>
    {children}
  </StyledBrand>
);

export default Brand;
