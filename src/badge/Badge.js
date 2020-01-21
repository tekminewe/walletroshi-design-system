import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Color, getColor } from '../color';
import SmallText from '../typography/SmallText';

const StyledBadge = styled(SmallText)`
  background-color: ${({ backgroundColor }) => getColor(backgroundColor)};
  padding-right: 1rem;
  padding-left: 1rem;
  border-radius: 10rem;
`;

const Badge = ({ children, backgroundColor, ...props }) => {
  return (
    <StyledBadge backgroundColor={backgroundColor} color="white" {...props}>{children}</StyledBadge>
  )
};

Badge.defaultProps = {
  backgroundColor: Color.primary,
}

Badge.propTypes = {
  /**
   * Text of the badge
   */
  children: PropTypes.string.isRequired,

  /**
   * Background color of the badge
   */
  backgroundColor: PropTypes.string,
}

export default Badge; 
