import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/button';

export default {
  title: 'Button',
};

export const normal = () => <Button onClick={action('clicked')}>Normal Button</Button>;
