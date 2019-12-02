import React from 'react';
import styled from 'styled-components';

const StyledH5 = styled.h5`
  font-size: 1.5rem;
`

const H5 = ({ children, ...props }) => (
  <StyledH5 {...props}>{children}</StyledH5>
);

export default H5;
