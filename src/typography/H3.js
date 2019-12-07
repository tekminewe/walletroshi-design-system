import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Color } from '../color';

const StyledH3 = styled.h3`
  font-size: 2rem;
  color: ${({ color }) => color};
`

const H3 = ({ children, variant, ...props }) => (
  <StyledH3 {...props} color={Color[variant]}>{children}</StyledH3>
);

H3.defaultProps = {
  variant: 'dark',
}

H3.propTypes = {
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

export default H3;
