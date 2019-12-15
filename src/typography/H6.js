import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor } from '../color';

const StyledH6 = styled.h6`
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: ${({ color }) => color};
  margin: 0;
  padding: 0;
`

const H6 = ({ children, color, ...props }) => (
  <StyledH6 {...props} color={getColor(color)}>{children}</StyledH6>
);

H6.defaultProps = {
  color: 'dark',
}

H6.propTypes = {
  /**
   * Color of the text
   */
  color: PropTypes.string,
}

export default H6;
