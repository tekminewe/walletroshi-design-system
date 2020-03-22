import React from 'react'
import { addDecorator } from '@storybook/react'

import { GlobalStyle } from '../src/style'
import { StorybookStyle } from '../src/style/storybook'

addDecorator(story => (
  <>
    <StorybookStyle />
    <GlobalStyle />
    {story()}
  </>
));
