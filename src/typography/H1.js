import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Color } from '../color';

const StyledH1 = styled.h1`
  font-size: 2.5rem;
  color: ${({ color }) => color};
`

const H1 = ({ children, variant, ...props }) => (
  <StyledH1 {...props} color={Color[variant]}>{children}</StyledH1>
);

H1.defaultProps = {
  variant: 'dark',
}

H1.propTypes = {
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

export default H1;
