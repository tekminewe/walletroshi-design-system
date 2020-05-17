import { withKnobs } from '@storybook/addon-knobs'

import OverviewStory from './stories/overview'

export default {
  title: 'Big Cheese App Design System | Typography',
  decorators: [withKnobs]
}

export const overview = OverviewStory