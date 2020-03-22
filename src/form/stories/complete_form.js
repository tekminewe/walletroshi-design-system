import React from 'react'

import Checkbox from '../checkbox'
import TextInput from '../text_input'

const CompleteFormStory = () => (
  <div>
    <Checkbox
      label="This is a checkbox"
      checked
      onChange={() => {}}
    />
    <TextInput
      placeholder="Please enter a value"
      value=""
    />
    <TextInput
      placeholder="Please enter a value"
      value=""
    />
  </div>
)

export default CompleteFormStory
