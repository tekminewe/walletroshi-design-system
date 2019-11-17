import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #f50057;
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

const Button = ({ children, onClick }) => {
  return (
    <StyledButton
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;