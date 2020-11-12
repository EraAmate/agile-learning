import React, { useState } from 'react';
import Modal from '../components/Modal';

const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  // eslint-disable-next-line
  const DisplayModal = ({ modalHeaderText, addNote, ...props }) => (
    <>
      {isVisible && (
        <Modal
          modalHeaderText={modalHeaderText}
          addNote={addNote}
          closeModal={hide}
          title={title}
          onChangeTitle={(e) => setTitle(e.target.value)}
          body={body}
          onChangeBody={(e) => setBody(e.target.value)}
        />
      )}
    </>
  );
  return {
    show,
    hide,
    title,
    body,
    DisplayModal
  };
};

export default useModal;
