import React, { useState } from 'react';
import { Header } from '../components/Header';
import { FilterMenu } from '../components/FilterMenu';
import { ModalInput } from '../components/modalComponents';
import { RightSide, Column, Note, NoteTitle, Paragraph, Data, ColorBorder, ColumnTitle, Button, Body } from '../components/noteComponents';
import { useModal } from '../../hooks/useModal';
import useGetNotes from '../../hooks/useGetNotes';
import Loading from '../components/Loading';

export default function NotesApp() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const { show, DisplayModal } = useModal();
  const { notes, isLoading } = useGetNotes();

  let today = new Date();
  let date = today.getDate() + '.' + today.toLocaleString('default', { month: 'short' }) + '.' + today.getFullYear();

  const _showNote = () => {
    if (isLoading) {
      return <Loading />;
    }

    return (
      <>
        {notes ? (
          notes.map((note, i) => {
            return (
              <Note key={i}>
                <ColorBorder color="yellow">
                  <NoteTitle>{note.title}</NoteTitle>
                  <Data>{date}</Data>
                  <Paragraph>{note.body}</Paragraph>
                  <div>
                    <Button background="#2196F3" color="#2196F3" style={{ cursor: 'pointer' }}>
                      Edit
                    </Button>
                    <Button background="#D06778" color="#DD302F" style={{ cursor: 'pointer' }}>
                      Remove
                    </Button>
                  </div>
                </ColorBorder>
              </Note>
            );
          })
        ) : (
          <div>Got Nothing</div>
        )}
      </>
    );
  };

  return (
    <>
      <Header text="Notes" onClick={show} />
      <Body>
        <FilterMenu />
        <DisplayModal modalHeaderText="Create new note">
          <ModalInput
            type="text"
            placeholder="title..."
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <ModalInput
            height="50px"
            type="text"
            placeholder="text..."
            value={body}
            onChange={(event) => {
              setBody(event.target.value);
            }}
          />
        </DisplayModal>
        <RightSide>
          <Column>
            <ColumnTitle>To do</ColumnTitle>
            {_showNote()}
          </Column>
          <Column>
            <ColumnTitle>In progress</ColumnTitle>
          </Column>
          <Column>
            <ColumnTitle>Done</ColumnTitle>
          </Column>
        </RightSide>
      </Body>
    </>
  );
}
