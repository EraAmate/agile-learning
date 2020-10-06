import React, { useState } from 'react';
import { Main } from '../../common/Main';
import {
  Form,
  Wrapper,
  Column,
  Note,
  NoteTitle,
  Paragraph,
  Data,
  ColorBorder,
  ColumnTitle,
  Button,
  TitleField,
  NoteBodyField,
  AddButton
} from '../components/noteComponents';

export default function NotesApp() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [obj, setObj] = useState({
    title: 'Title',
    body: 'Here comes your note'
  });
  const [color] = useState('');
  const [notes] = useState([obj]);
  /*  const [notes, setNotes] = useState(() => {
    console.log(JSON.parse(localStorage.getItem('Notes')));
  }); */
  let colors = ['#ECAE20', 'black', 'white', 'pink', 'yellow', 'green', 'blue'];

  function saveNote() {
    let object = { title: title, body: body, color: color };
    notes.push(object);
    let serializedNotes = JSON.stringify(notes);
    localStorage.setItem('Notes', serializedNotes);
  }

  function getNote() {
    let notes = JSON.parse(localStorage.getItem('Notes'));
    setObj(notes);
  }

  function removeNote() {
    alert('Comming soon...');
  }

  function updateNote() {
    alert('Comming soon...');
  }

  let today = new Date();
  let date = today.getDate() + '.' + today.toLocaleString('default', { month: 'short' }) + '.' + today.getFullYear();

  const _getForm = () => {
    return (
      <Form>
        <p>Create new note</p>
        <TitleField
          type="text"
          placeholder="Title"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          value={title}
        />
        <NoteBodyField
          type="text"
          placeholder="Write your note..."
          onChange={(event) => {
            setBody(event.target.value);
          }}
          value={body}
        />
        <div>
          <AddButton onClick={saveNote}>Add note</AddButton>
          <AddButton onClick={getNote}>Show note</AddButton>
        </div>
      </Form>
    );
  };

  const _showNote = () => {
    return (
      <>
        {notes ? (
          notes.map((note, i) => {
            return (
              <Note key={i}>
                <ColorBorder color={colors[4]}>
                  <NoteTitle>{note.title}</NoteTitle>
                  <Data>{date}</Data>
                  <Paragraph>{note.body}</Paragraph>
                  <div>
                    <Button background="#759CC9" color="#759CC9" onClick={updateNote} style={{ cursor: 'pointer' }}>
                      Edit
                    </Button>
                    <Button background="#DD302F" color="#DD302F" onClick={removeNote} style={{ cursor: 'pointer' }}>
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
      <Main>
        {_getForm()}
        <Wrapper>
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
        </Wrapper>
      </Main>
    </>
  );
}
