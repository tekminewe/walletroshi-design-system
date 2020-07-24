import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classnames from 'classnames'

import '../tailwind.generated.css'
import { Color, getColor } from '../theme/color'
import Text from '../typography/text'

const StyledBadge = styled(Text)`
  background-color: ${({ backgroundColor }) => getColor(backgroundColor)};
`;

const Badge = ({ children, backgroundColor, className, ...props }) => {
  const classNames = classnames(className, 'px-4 rounded-full')
  return (
    <StyledBadge
      backgroundColor={backgroundColor}
      color="white"
      {...props}
      className={classNames}
    >{children}</StyledBadge>
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
