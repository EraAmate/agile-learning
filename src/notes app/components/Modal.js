import React from 'react';
import PropTypes from 'prop-types';
import { ModalButton, ModalFooter, ModalHeader, ModalWrapper } from './modalComponents';
function Modal({ modalHeaderText, children, closeModal, addNote }) {
  return (
    <ModalWrapper>
      <form onSubmit={addNote}>
        <ModalHeader>{modalHeaderText}</ModalHeader>
        {children}
        <ModalFooter>
          <ModalButton bgColor="#525252" color="white" onClick={closeModal}>
            Close
          </ModalButton>
          <ModalButton type="submit" color="white" bgColor="#2196F3" brColor="#2196F3">
            Create
          </ModalButton>
        </ModalFooter>
      </form>
    </ModalWrapper>
  );
}
export default Modal;

Modal.propTypes = {
  modalHeaderText: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
  addNote: PropTypes.func,
  closeModal: PropTypes.func
};
