import React from 'react';
import styled from 'styled-components';

import { Color } from '../color';
import { Text } from '../typography';

const getColors = (type) => {
  switch (type) {
    case 'secondary':
      return Color.secondary;

    default:
      return Color.primary;
  }
}

const StyledButton = styled.button`
  background-color: ${({ backgroundColor}) => backgroundColor};
  border-radius: 8px;
  border-width: 0;
  color: white;
  cursor: pointer;
  padding: 0px 16px;

  :focus {
    outline: none !important;
  }
`

const Button = ({ children, onClick, type }) => {
  const backgroundColor = getColors(type);
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
  type: 'primary',
}

export default Button;