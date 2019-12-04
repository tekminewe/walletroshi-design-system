import React from 'react';
import PropTypes from 'prop-types';

import H3 from '../typography/H3';
import Text from '../typography/Text';

const FormHeader = ({ title, subtitle }) => (
  <>
    <H3>{title}</H3>
    <Text>{subtitle}</Text>
  </>
)

FormHeader.propTypes = {
  /**
   * Title of the form
   */
  title: PropTypes.string.isRequired,

  /**
   * Subtitle of the form
   */
  subtitle: PropTypes.string.isRequired,
}

export default FormHeader;
