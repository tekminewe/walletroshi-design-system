import React from 'react';
import styled from 'styled-components';

const StyledH6 = styled.h6`
  font-size: 1.25rem;
`

const H6 = ({ children, ...props }) => (
  <StyledH6 {...props}>{children}</StyledH6>
);

export default H6;
