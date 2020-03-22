import React from 'react';
import styled from 'styled-components';

import { Color } from '../color';
import Margin from '../layout/margin';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid ${Color.light};
  border-radius: 0.5rem;
`

const Card = ({ children, ...props }) => (
  <StyledCard {...props}>
    <Margin>
      {children}
    </Margin>
  </StyledCard>
)

export default Card;
