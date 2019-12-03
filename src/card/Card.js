import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`

const Card = ({ children, ...props }) => (
  <StyledCard {...props}>
    {children}
  </StyledCard>
)

export default Card;
