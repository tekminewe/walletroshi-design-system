import { withKnobs } from '@storybook/addon-knobs'

import ButtonStory from './stories/button'

export default {
  title: 'Wallet Roshi Design System | Button',
  decorators: [withKnobs]
}

export const button = ButtonStory