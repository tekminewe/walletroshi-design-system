import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
configure([
  require.context('../src', false, /Intro\.stories\.mdx/),
  require.context('../src', true, /\.stories\.(js|mdx)$/),
], module);
