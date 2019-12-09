import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor } from '../color';

const StyledH1 = styled.h1`
  font-size: 2.5rem;
  line-height: 3rem;
  color: ${({ color }) => color};
`

const H1 = ({ children, color, ...props }) => (
  <StyledH1 {...props} color={getColor(color)}>{children}</StyledH1>
);

H1.defaultProps = {
  color: 'dark',
}

H1.propTypes = {
  /**
   * Color of the text
   */
  color: PropTypes.string,
}

export default H1;
