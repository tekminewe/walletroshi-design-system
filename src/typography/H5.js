import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Color } from '../color';

const StyledH5 = styled.h5`
  font-size: 1.5rem;
  color: ${({ color }) => color};
`

const H5 = ({ children, variant, ...props }) => (
  <StyledH5 {...props} color={Color[variant]}>{children}</StyledH5>
);

H5.defaultProps = {
  variant: 'dark',
}

H5.propTypes = {
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

export default H5;
