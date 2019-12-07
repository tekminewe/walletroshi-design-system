import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { shade } from 'polished';

import { getColor } from '../color';
import { Text } from '../typography';

const StyledButton = styled.button`
  display: flex;
  flex: 1;
  justify-content: center;
  background-color: ${({ color, outline }) => outline ? 'white' : getColor(color)};
  border-radius: 0.5rem;
  border: ${({ color, outline }) => outline ? `1px solid ${getColor(color)}` : '0'};
  cursor: pointer;
  padding: 0px 2rem;
  transition: 0.5s;

  p {
    color: ${({ color, outline }) => outline ? getColor(color) : 'white'};
  }

  :focus {
    outline: none !important;
  }

  :hover {
    background-color: ${({ color, outline }) => outline ? getColor(color) : shade(0.2, getColor(color))};
  }

  :hover p {
    color: white;
  }
`

const Button = ({ children, variant, color, ...props }) => {
  const isOutline = variant === 'outline';

  return (
    <StyledButton
      {...props}
      color={color}
      outline={isOutline}
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