import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor } from '../color';

const StyledH5 = styled.h5`
  font-size: 1.5rem;
  color: ${({ color }) => color};
`

const H5 = ({ children, color, ...props }) => (
  <StyledH5 {...props} color={getColor(color)}>{children}</StyledH5>
);

H5.defaultProps = {
  color: 'dark',
}

H5.propTypes = {
  /**
   * Color of the text
   */
  color: PropTypes.string,
}

export default H5;
