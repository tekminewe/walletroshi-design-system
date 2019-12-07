import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor } from '../color';

const StyledH4 = styled.h4`
  font-size: 1.75rem;
  color: ${({ color }) => color};
`

const H4 = ({ children, color, ...props }) => (
  <StyledH4 {...props} color={getColor(color)}>{children}</StyledH4>
);

H4.defaultProps = {
  color: 'dark',
}

H4.propTypes = {
  /**
   * Color of the text
   */
  color: PropTypes.string,
}

export default H4;
