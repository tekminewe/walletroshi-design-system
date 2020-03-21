import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions';

import Checkbox from './checkbox'

export default () => (
  <Checkbox
    label={text('Label', 'Have you exercise today?')}
    checked={boolean('Checked', false)}
    onChange={action('value-change')}
  />
);