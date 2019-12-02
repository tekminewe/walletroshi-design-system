import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
  font-size: 1rem;
`

const Text = ({ children, ...props }) => (
  <StyledText {...props}>{children}</StyledText>
);

export default Text;
