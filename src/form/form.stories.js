import { withKnobs } from '@storybook/addon-knobs'

import CompleteFormStory from './stories/complete_form'
import CheckboxStory from './stories/checkbox'
import TextInputStory from './stories/text_input'

export default {
  title: 'Wallet Roshi Design System | Form',
  decorators: [withKnobs]
}

export const completeForm = CompleteFormStory

export const checkbox = CheckboxStory

export const textInput = TextInputStory
