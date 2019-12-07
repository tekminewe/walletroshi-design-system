import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Color } from '../color';

const StyledH6 = styled.h6`
  font-size: 1.25rem;
  color: ${({ color }) => color};
`

const H6 = ({ children, variant, ...props }) => (
  <StyledH6 {...props} color={Color[variant]}>{children}</StyledH6>
);

H6.defaultProps = {
  variant: 'dark',
}

H6.propTypes = {
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

export default H6;
