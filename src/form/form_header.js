import React from 'react';
import PropTypes from 'prop-types';

import H3 from '../typography/H3';
import Text from '../typography/Text';
import { Spacer } from '../layout';

const FormHeader = ({ title, subtitle }) => (
  <>
    {title && (<H3>{title}</H3>)}
    <Spacer />
    {subtitle && (<Text>{subtitle}</Text>)}
    <Spacer />
  </>
)

FormHeader.propTypes = {
  /**
   * Title of the form
   */
  title: PropTypes.string,

  /**
   * Subtitle of the form
   */
  subtitle: PropTypes.string,
}

export default FormHeader;
