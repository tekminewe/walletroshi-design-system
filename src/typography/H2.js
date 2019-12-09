import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor } from '../color';

const StyledH2 = styled.h2`
  font-size: 2.25rem;
  line-height: 2.75rem;
  color: ${({ color }) => color};
`

const H2 = ({ children, color, ...props }) => (
  <StyledH2 {...props} color={getColor(color)}>{children}</StyledH2>
);

H2.defaultProps = {
  color: 'dark',
}

H2.propTypes = {
  /**
   * Color of the text
   */
  color: PropTypes.string,
}

export default H2;
