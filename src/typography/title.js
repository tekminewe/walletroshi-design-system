import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import '../tailwind.css';
import { getColor } from '../color';

const StyledTitle = styled.h1`
  color: ${({ color }) => color};
`

const Title = ({ children, color, className, ...props }) => {
  const classNames = classnames(className, 'text-5xl');
  return (
    <StyledTitle
      {...props}
      className={classNames}
      color={getColor(color)}
    >
      {children}
    </StyledTitle>
  );
}

Title.defaultProps = {
  color: 'dark',
}

Title.propTypes = {
  /**
   * Color of the text
   */
  color: PropTypes.string,
}

export default Title;
