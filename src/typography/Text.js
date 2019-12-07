import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Color } from '../color';

const StyledText = styled.p`
  font-size: 1rem;
  color: ${({ color }) => color};
`

const Text = ({ children, variant, ...props }) => (
  <StyledText {...props} color={Color[variant]}>{children}</StyledText>
);

Text.defaultProps = {
  variant: 'dark',
}

Text.propTypes = {
  /**
   * Variant color of the text
   */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]),
}

export default Text;
