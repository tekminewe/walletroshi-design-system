import React from 'react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions';

import CheckboxStory from './stories/checkbox'
import TextInput from './text_input'

export default {
  title: 'Wallet Roshi Design System | Form',
  decorators: [withKnobs]
}

export const checkbox = CheckboxStory

export const textInput = () => (
  <TextInput
    placeholder={text('Placeholder', 'Please enter a value')}
    value={text('Value', '')}
    error={text('Error', '')}
  />
);
