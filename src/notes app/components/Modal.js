import React from 'react';
import PropTypes from 'prop-types';
import { ModalButton, ModalFooter, ModalHeader, ModalWrapper, ModalInput } from './modalComponents';
function Modal({ modalHeaderText, closeModal, addNote, title, body, onChangeTitle, onChangeBody }) {
  return (
    <ModalWrapper>
      <form onSubmit={addNote}>
        <ModalHeader>{modalHeaderText}</ModalHeader>
        <ModalInput type="text" placeholder="title..." value={title} onChange={onChangeTitle} />
        <ModalInput height="50px" type="text" placeholder="text..." value={body} onChange={onChangeBody} />
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
  title: PropTypes.string,
  body: PropTypes.string,
  onClick: PropTypes.func,
  addNote: PropTypes.func,
  closeModal: PropTypes.func,
  onChangeTitle: PropTypes.func,
  onChangeBody: PropTypes.func
};
