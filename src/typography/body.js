import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import '../tailwind.css';
import { getColor } from '../color';

const StyledBody = styled.p`
  color: ${({ color }) => color};
`

const Body = ({ children, color, className, ...props }) => {
  const classNames = classnames(className, 'text-base');
  return (
    <StyledBody {...props} className={classNames} color={getColor(color)}>{children}</StyledBody>
  );
}

Body.defaultProps = {
  color: 'dark',
}

Body.propTypes = {
  /**
   * Color of the text
   */
  color: PropTypes.string,
}

export default Body;
