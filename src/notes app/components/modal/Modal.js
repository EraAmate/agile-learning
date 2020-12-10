import PropTypes from 'prop-types';
import React from 'react';

import { ModalFooter, ModalHeader, ModalWrapper, Button } from './modalComponents';

function Modal({ modalHeaderText, closeModal, addNote, title, body, onChangeTitle, onChangeBody }) {
  return (
    <ModalWrapper>
      <form onSubmit={addNote}>
        <ModalHeader>{modalHeaderText}</ModalHeader>
        <input type="text" placeholder="title..." value={title} onChange={onChangeTitle} />
        <input height="50px" type="text" placeholder="text..." value={body} onChange={onChangeBody} />
        <ModalFooter>
          <Button bgColor="#525252" color="white" onClick={closeModal}>
            Close
          </Button>
          <Button type="submit" color="white" bgColor="#2196F3" brColor="#2196F3">
            Create
          </Button>
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
