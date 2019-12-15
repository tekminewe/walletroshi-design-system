import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor } from '../color';

const StyledH3 = styled.h3`
  font-size: 2rem;
  line-height: 2.5rem;
  color: ${({ color }) => color};
  margin: 0;
  padding: 0;
`

const H3 = ({ children, color, ...props }) => (
  <StyledH3 {...props} color={getColor(color)}>{children}</StyledH3>
);

H3.defaultProps = {
  color: 'dark',
}

H3.propTypes = {
  /**
   * Color of the text
   */
  color: PropTypes.string,
}

export default H3;
