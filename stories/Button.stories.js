import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';

import { Button } from '../components';

export default {
  title: 'Button',
};

export const normal = () => (
  <Button
    onClick={action('clicked')}
    type={select('Type', ['primary', 'secondary'])}
  >
    Normal Button
  </Button>
);

normal.story = {
  decorators: [withKnobs],
}
