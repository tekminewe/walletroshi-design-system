import React from 'react'
import { text } from '@storybook/addon-knobs'

import TextInput from '../text_input'

const TextInputStory = () => (
  <TextInput
    placeholder={text('Placeholder', 'Please enter a value')}
    value={text('Value', '')}
    error={text('Error', '')}
  />
)

export default TextInputStory
