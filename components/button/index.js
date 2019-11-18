import React from 'react';
import styled from 'styled-components';

import { Color } from '../color';

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
  border-radius: 5px;
  border-width: 0;
  color: white;
  cursor: pointer;
  font-weight: bold;
  padding: 16px 24px;
  width: 100%;

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
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: 'primary',
}

export default Button;