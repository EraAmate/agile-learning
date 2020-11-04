import React, { useState } from 'react';
import Modal from '../notes app/components/Modal';

export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);
  // eslint-disable-next-line
  const DisplayModal = ({ children, modalHeaderText }) => (
    <React.Fragment>
      {isVisible && (
        <Modal modalHeaderText={modalHeaderText} closeModal={hide}>
          {children}
        </Modal>
      )}
    </React.Fragment>
  );

  return {
    show,
    hide,
    DisplayModal
  };
};
