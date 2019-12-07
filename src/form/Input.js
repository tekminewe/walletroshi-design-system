import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Color } from '../color';
import { Text } from '../typography';

const Container = styled.div`
  display: flex;
  flex: 1;
  border-radius: 0.5rem;
  border: 1px solid ${Color.light};
`

const StyledInput = styled.input`
  display: flex;
  flex: 1;
  padding: 1rem;
  border: 0;
  font-size: 1rem;
`

const Input = ({ error, ...props }) => (
  <Container>
    <StyledInput {...props} />
    {error && (<Text variant="danger">{error}</Text>)}
  </Container>
)

Input.propTypes = {
  /**
   * Error message of the input
   */
  error: PropTypes.string,
}

export default Input;
