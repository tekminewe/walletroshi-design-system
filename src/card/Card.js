import React from 'react';
import styled from 'styled-components';

import { Color } from '../color';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 1rem;
  border: 1px solid ${Color.light};
  border-radius: 0.5rem;
`

const Card = ({ children, ...props }) => (
  <StyledCard {...props}>
    {children}
  </StyledCard>
)

export default Card;
