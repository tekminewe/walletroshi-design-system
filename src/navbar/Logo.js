import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledLogo = styled.img`
  width: 50px;
  height: 50px;
`

const Logo = (props) => (
  <StyledLogo {...props} />
);

Logo.propTypes = {
  /**
   * Source of the image
   */
  src: PropTypes.string.isRequired,
}

export default Logo;
