import React, { useState } from 'react';
import Modal from '../notes app/components/Modal';

export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);
  // eslint-disable-next-line
  const DisplayModal = ({ children, modalHeaderText, addNote }) => (
    <>
      {isVisible && (
        <Modal modalHeaderText={modalHeaderText} addNote={addNote} closeModal={hide}>
          {children}
        </Modal>
      )}
    </>
  );

  return {
    show,
    hide,
    DisplayModal
  };
};
