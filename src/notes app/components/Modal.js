import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';

function Modal({ modalHeaderText, children, closeModal, addNote }) {
  return (
    <ModalWrapper>
      <form>
        <ModalHeader>{modalHeaderText}</ModalHeader>
        {children}
        <ModalFooter>
          <ModalButton onClick={closeModal}>Close</ModalButton>
          <ModalButton onClick={addNote}>Add note</ModalButton>
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

// Components

const ModalWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 20%;
  border-radius: 8px;
  height: 200px;
  width: 400px;
  background: white;
  color: black;
  padding: 10px;

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
  }
`;
const ModalButton = styled.button`
  cursor: pointer;
  padding: 5px 7px;
  font-size: 1rem;
  border-radius: 4px;
  background: none;
  border: 1px solid black;
  margin-left: 10px;
`;
const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #e9ecef;
  margin-bottom: 20px;
  padding-bottom: 1rem;
  font-size: 1.2rem;
`;
const ModalFooter = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 1rem;
  border-top: 1px solid #e9ecef;
`;
