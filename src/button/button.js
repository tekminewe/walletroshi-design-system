import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { shade } from 'polished'

import '../tailwind.generated.css';
import { getColor, Color } from '../theme/color'
import Text from '../typography/text'

const StyledButton = styled.button`
  background-color: ${({ color, outline }) => outline ? 'white' : getColor(color)};
  border: ${({ color, outline }) => outline ? `1px solid ${getColor(color)}` : '0'};

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

const Button = ({ children, variant, color, loading, ...props }) => {
  const isOutline = variant === 'outline';

  return (
    <StyledButton
      {...props}
      color={color}
      outline={isOutline}
      className="px-4 py-2 rounded-lg flex justify-center duration-500 cursor-pointer"
    >
      <Text>{children}</Text>
    </StyledButton>
  );
};

Button.defaultProps = {
  color: Color.primary,
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
  color: PropTypes.string,

  /**
   * Style of the button
   */
  variant: PropTypes.oneOf(['standard', 'outline']),
}

export default Button
