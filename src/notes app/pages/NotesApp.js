import React, { useState } from 'react';
import { Header } from '../components/Header';
import { FilterMenu } from '../components/FilterMenu';
import { ModalInput } from '../components/modalComponents';
import { RightSide, Column, Note, NoteTitle, Paragraph, Data, ColorBorder, ColumnTitle, Button, Body } from '../components/noteComponents';
import { useModal } from '../../hooks/useModal';

export default function NotesApp() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { show, DisplayModal } = useModal();
  let notes = [
    {
      title: 'title',
      body: 'body'
    }
  ];
  async function createNote(event) {
    event.preventDefault();
    const note = {
      title: title,
      body: body
    };

    const response = await fetch(process.env.REACT_APP_POLLS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    });
    const createdNote = await response.json();
    alert(`Note has been created with id ${createdNote.id}`);
  }

  let today = new Date();
  let date = today.getDate() + '.' + today.toLocaleString('default', { month: 'short' }) + '.' + today.getFullYear();

  const _showNote = () => {
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
        <DisplayModal addNote={createNote} modalHeaderText="Create new note">
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
