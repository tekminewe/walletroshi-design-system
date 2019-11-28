import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/style';
import { StorybookStyle } from '../src/style/storybook';

addDecorator(story => (
  <>
    <StorybookStyle />
    <GlobalStyle />
    {story()}
  </>
));

// automatically import all files ending in *.stories.js
configure([
  require.context('../src', false, /Intro\.stories\.mdx/),
  require.context('../src', true, /\.stories\.(js|mdx)$/),
], module);
