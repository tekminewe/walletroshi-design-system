import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import '../tailwind.css';
import { getColor } from '../color';

const StyledHint = styled.p`
  color: ${({ color }) => color};
`

const Hint = ({ children, color, className, ...props }) => {
  const classNames = classnames(className, 'text-sm text-gray-500');
  return (
    <StyledHint {...props} className={classNames} color={getColor(color)}>{children}</StyledHint>
  );
}

Hint.defaultProps = {
  color: 'dark',
}

Hint.propTypes = {
  /**
   * Color of the text
   */
  color: PropTypes.string,
}

export default Hint;
