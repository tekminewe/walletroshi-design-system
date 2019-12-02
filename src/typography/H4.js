import React from 'react';
import styled from 'styled-components';

const StyledH4 = styled.h4`
  font-size: 1.75rem;
`

const H4 = ({ children, ...props }) => (
  <StyledH4 {...props}>{children}</StyledH4>
);

export default H4;
