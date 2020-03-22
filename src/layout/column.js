import React from 'react';
import styled from 'styled-components';

const StyledColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`

const Column = ({ children, ...props }) => (
  <StyledColumn {...props}>
    {children}
  </StyledColumn>
);

export default Column;
