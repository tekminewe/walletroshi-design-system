import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions';

import Checkbox from '../checkbox'

const CheckboxStory = () => (
  <Checkbox
    label={text('Label', 'Have you exercise today?')}
    checked={boolean('Checked', false)}
    onChange={action('value-change')}
  />
);

export default CheckboxStory
