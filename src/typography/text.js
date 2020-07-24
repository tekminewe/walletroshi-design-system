import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import '../tailwind.css';
import typographyConfig from '../theme/typography';

const Text = ({
  children,
  size,
  className,
  ...props
}) => {
  const classNames = classnames(className, typographyConfig.fontSize[size]);
  return (
    <p {...props} className={classNames}>{children}</p>
  );
}

Text.defaultProps = {
  size: 'base',
}

Text.propTypes = {
  /**
   * Color of the text
   */
  size: PropTypes.oneOf(['sm', 'base', 'lg', 'xl']),
}

export default Text;
