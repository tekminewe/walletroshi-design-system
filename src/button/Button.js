import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { shade } from 'polished';

import { Color } from '../color';
import { Text } from '../typography';

const getColors = (color) => {
  return Color[color];
}

const StyledButton = styled.button`
  display: flex;
  flex: 1;
  justify-content: center;
  background-color: ${({ color, outline }) => outline ? 'white' : getColors(color)};
  border-radius: 0.5rem;
  border: ${({ color, outline }) => outline ? `1px solid ${getColors(color)}` : '0'};
  color: ${({ color, outline }) => outline ? getColors(color) : 'white'};
  cursor: pointer;
  padding: 0px 2rem;
  transition: 0.5s;

  :focus {
    outline: none !important;
  }

  :hover {
    background-color: ${({ color, outline }) => outline ? getColors(color) : shade(0.2, getColors(color))};
    color: white;
  }
`

const Button = ({ children, variant, ...props }) => {
  return (
    <StyledButton
      {...props}
      outline={variant === 'outline'}
    >
      <Text>{children}</Text>
    </StyledButton>
  );
};

Button.defaultProps = {
  color: 'primary',
  onClick: null,
  variant: 'standard',
}

Button.propTypes = {
  /**
   * A callback function that will be called when the button is pressed
   */
  onClick: PropTypes.func,

  /**
   * Color of the button
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
  ]),

  /**
   * Style of the button
   */
  variant: PropTypes.oneOf(['standard', 'outline']),
}

export default Button;