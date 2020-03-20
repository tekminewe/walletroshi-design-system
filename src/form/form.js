import React from 'react';
import PropTypes from 'prop-types';

import FormHeader from './form_header';

const Form = ({ children, title, subtitle, ...props }) => (
  <form {...props}>
    <FormHeader title={title} subtitle={subtitle} />
    {children}
  </form>
);

Form.propTypes = {
  /**
   * Title of the form
   */
  title: PropTypes.string,

  /**
   * Subtitle of the form
   */
  subtitle: PropTypes.string,
}

Form.Header = FormHeader;

export default Form;
