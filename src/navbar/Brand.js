import React from 'react';
import styled from 'styled-components';

const StyledBrand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 1rem;
  
  :hover {
    cursor: pointer;
  }
`

const Brand = ({ children, ...props }, ref) => (
  <StyledBrand ref={ref} {...props}>
    {children}
  </StyledBrand>
);

export default React.forwardRef(Brand);
