import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getColor } from '../color';

const StyledText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: ${({ color }) => color};
`

const Text = ({ children, color, ...props }) => (
  <StyledText {...props} color={getColor(color)}>{children}</StyledText>
);

Text.defaultProps = {
  color: 'dark',
}

Text.propTypes = {
  /**
   * Color of the text
   */
  color: PropTypes.string,
}

export default Text;
