import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Color } from '../color';

const StyledH4 = styled.h4`
  font-size: 1.75rem;
  color: ${({ color }) => color};
`

const H4 = ({ children, variant, ...props }) => (
  <StyledH4 {...props} color={Color[variant]}>{children}</StyledH4>
);

H4.defaultProps = {
  variant: 'dark',
}

H4.propTypes = {
  /**
   * Variant color of the heading 1
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

export default H4;
