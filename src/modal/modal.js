import React from 'react';
import styled from 'styled-components';

import Content from './content';

const StyledModal = styled.div`
  display: ${({ visible }) => visible ? 'block' : 'none'};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`

const Modal = ({ children, ...props}) => (
  <StyledModal {...props}>
    {children}
  </StyledModal>
)

Modal.Content = Content;

export default Modal;
