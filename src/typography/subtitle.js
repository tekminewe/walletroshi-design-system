import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import '../tailwind.css';
import { getColor } from '../color';

const StyledSubtitle = styled.h2`
  color: ${({ color }) => color};
`

const Subtitle = ({ children, color, className, ...props }) => {
  const classNames = classnames(className, 'text-3xl font-semibold');
  return (
    <StyledSubtitle
      {...props}
      className={classNames}
      color={getColor(color)}
    >
      {children}
    </StyledSubtitle>
  );
}

Subtitle.defaultProps = {
  color: 'dark',
}

Subtitle.propTypes = {
  /**
   * Color of the text
   */
  color: PropTypes.string,
}

export default Subtitle;
