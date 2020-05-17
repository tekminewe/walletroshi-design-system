import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { getColor } from '../color';
import Body from '../typography/body';
import { Column } from '../layout';
import { transparentize } from 'polished';

const StyledInput = styled.input`
  display: flex;
  flex: 1;
  padding: 1rem;
  font-size: 1rem;
  background-color: ${({ error }) => error ? transparentize(0.9, getColor('danger')) : 'transparent'};
  border: 1px solid ${({ error }) => error ? getColor('danger') : getColor('light')};
  border-radius: 0.5em;

  :focus {
    border: 1px solid ${({ error }) => error ? getColor('danger') : getColor('secondary')};
  }
`

const InputContainer = styled(Column)`
  align-items: stretch;
  margin: 1rem 0;
`

const TextInput = React.forwardRef(({ error, ...props }, ref) => (
  <InputContainer>
    <StyledInput ref={ref} {...props} />
    {error && (<Body color="danger">{error}</Body>)}
  </InputContainer>
))

TextInput.defaultProps = {
  error: '',
  value: '',
  onChange: () => {},
  name: ''
}

TextInput.propTypes = {
  /**
   * Value of the input
   */
  value: PropTypes.string,

  /**
   * Error message of the input
   */
  error: PropTypes.string,

  /**
   * Callback when the checked value is changed
   */
  onChange: PropTypes.func,

  /**
   * Name of the input
   */
  name: PropTypes.string,
}

export default TextInput;
