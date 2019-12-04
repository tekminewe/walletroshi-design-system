import React from 'react';
import styled from 'styled-components';

import { Color } from '../color';

const Container = styled.div`
  display: flex;
  flex: 1;
  border-radius: 0.5em;
  border: 1px solid ${Color.light};
`

const StyledInput = styled.input`
  display: flex;
  flex: 1;
  padding: 1em;
  border: 0;
`

const Input = (props) => (
  <Container>
    <StyledInput {...props} />
  </Container>
)

export default Input;
