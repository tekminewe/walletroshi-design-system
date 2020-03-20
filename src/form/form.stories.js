import React from 'react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions';

import Checkbox from './checkbox'
import TextInput from './text_input'

export default {
  title: 'Wallet Roshi Design System | Form',
  decorators: [withKnobs]
}

export const checkbox = () => (
  <Checkbox
    label={text('Label', 'Have you exercise today?')}
    checked={boolean('Checked', false)}
    onChange={action('value-change')}
  />
);

export const textInput = () => (
  <TextInput
    placeholder={text('Placeholder', 'Please enter a value')}
    value={text('Value', '')}
    error={text('Error', '')}
  />
);
