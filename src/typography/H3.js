import React from 'react';
import styled from 'styled-components';

const StyledH3 = styled.h3`
  font-size: 2rem;
`

const H3 = ({ children, ...props }) => (
  <StyledH3 {...props}>{children}</StyledH3>
);

export default H3;
