import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`

`

const H1 = ({ children, ...props }) => (
  <StyledH1 {...props}>{children}</StyledH1>
);

export default H1;
