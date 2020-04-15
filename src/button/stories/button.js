import React from 'react'
import { select, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions';

import Button from '../button'

const ButtonStory = () => (
  <div>
    <Button
      variant={select('variant', ['standard', 'outline'])}
      onClick={action('Button clicked')}
      color={select('Color', [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark'
      ])}
    >
      {text('Label', 'Title')}
    </Button>
  </div>
)

export default ButtonStory
