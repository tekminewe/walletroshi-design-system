import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getColor } from '../theme/color';

const StyledEllipsis = styled.div`
  display: inline-block;
  position: relative;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  div {
    position: absolute;
    top: ${({ size }) => Math.ceil(size * 0.41)}px;
    width: ${({ size }) => Math.ceil(size * 0.15)}px;
    height: ${({ size }) => Math.ceil(size * 0.15)}px;
    border-radius: 50%;
    background: ${({ color }) => color};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  div:nth-child(1) {
    left: ${({ size }) => Math.ceil(size * 0.1)}px;
    animation: lds-ellipsis1 0.6s infinite;
  }

  div:nth-child(2) {
    left: ${({ size }) => Math.ceil(size * 0.1)}px;
    animation: lds-ellipsis2 0.6s infinite;
  }

  div:nth-child(3) {
    left: ${({ size }) => Math.ceil(size * 0.4)}px;
    animation: lds-ellipsis2 0.6s infinite;
  }

  div:nth-child(4) {
    left: ${({ size }) => Math.ceil(size * 0.7)}px;
    animation: lds-ellipsis3 0.6s infinite;
  }

  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(${({ size }) => size * 0.3}px, 0);
    }
  }
`

const getSizeNumber = (size) => {
  switch (size) {
    case 'small':
      return 50;

    case 'large':
      return 120;

    default:
      return 80;
  }
}

const Ellipsis = ({ color, size }) => {
  const sizeNumber = getSizeNumber(size);
  
  return (
    <StyledEllipsis color={getColor(color)} size={sizeNumber}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledEllipsis>
  );
}

Ellipsis.defaultProps = {
  color: 'secondary',
  size: 'regular',
}

Ellipsis.propTypes = {
  /**
   * Color of the dot
   */
  color: PropTypes.string,

  /**
   * Size of the dot
   */
  size: PropTypes.oneOf([
    'small',
    'regular',
    'large',
  ]),
}

export default Ellipsis;
