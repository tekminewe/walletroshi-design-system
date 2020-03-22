import React from 'react';
import Modal from './modal';
import Card from '../card/card';

export default {
  title: 'Wallet Roshi Design System | Modal',
  component: Modal,
  parameters: {
    componentSubtitle: 'Pop up modal that will show on screen. (Fullscreen in mobile devices)',
  },
};

export const standard = () => (
  <Modal visible>
    <Modal.Content>
      <Card>
        <p>Good</p>
      </Card>
    </Modal.Content>
  </Modal>
);
