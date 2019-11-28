import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Color } from '../color';
import { Text } from '../typography';

const getColors = (color) => {
  return Color[color];
}

const StyledButton = styled.button`
  background-color: ${({ backgroundColor}) => backgroundColor};
  border-radius: 1em;
  border-width: 0;
  color: white;
  cursor: pointer;
  padding: 0px 1em;

  :focus {
    outline: none !important;
  }
`

/**
- Normal button is a button with full color background
**/
const Button = ({ children, onClick, color, outline }) => {
  const backgroundColor = getColors(color);
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      <Text>{children}</Text>
    </StyledButton>
  );
};

Button.defaultProps = {
  color: 'primary',
  onClick: null,
}

Button.propTypes = {
  /**
    A callback function that will be called when the button is pressed
   */
  onClick: PropTypes.func,

  /**
   Color of the button
   */
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'muted',
  ]),

  outline: PropTypes.boolean,
}

export default Button;