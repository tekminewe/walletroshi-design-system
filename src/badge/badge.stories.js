import { withKnobs } from '@storybook/addon-knobs'

import OverviewStory from './stories/overview'

export default {
  title: 'Big Cheese App Design System | Badge',
  decorators: [withKnobs]
}

export const overview = OverviewStory