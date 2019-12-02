import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  font-size: 2.25rem;
`

const H2 = ({ children, ...props }) => (
  <StyledH2 {...props}>{children}</StyledH2>
);

export default H2;
