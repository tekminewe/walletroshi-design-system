import React from 'react';
import styled from 'styled-components';

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const Column = ({ children, ...props }) => (
  <StyledColumn {...props}>
    {children}
  </StyledColumn>
);

export default Column;
