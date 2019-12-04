import React from 'react';

import FormHeader from './FormHeader';

const Form = ({ children, title, subtitle }) => (
  <div>
    <FormHeader title={title} subtitle={subtitle} />
    {children}
  </div>
);

Form.Header = FormHeader;

export default Form;
