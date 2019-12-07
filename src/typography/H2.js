import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Color } from '../color';

const StyledH2 = styled.h2`
  font-size: 2.25rem;
  color: ${({ color }) => color};
`

const H2 = ({ children, variant, ...props }) => (
  <StyledH2 {...props} color={Color[variant]}>{children}</StyledH2>
);

H2.defaultProps = {
  variant: 'dark',
}

H2.propTypes = {
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

export default H2;
