import React from 'react';
import styled from 'styled-components';

const StyledCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Center = ({ children }) => (
  <StyledCenter>
    {children}
  </StyledCenter>
);

export default Center;
