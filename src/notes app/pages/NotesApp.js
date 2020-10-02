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
  Button
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
  let colors = [
    '#ECAE20',
    'black',
    'white',
    'pink',
    'yellow',
    'green',
    'blue'
  ];

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
  let date =
    today.getDate() +
    '.' +
    today.toLocaleString('default', { month: 'short' }) +
    '.' +
    today.getFullYear();

  const _getForm = () => {
    return (
      <Form>
        <label>
          Add note
          <input
            type="text"
            placeholder="title"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            value={title}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="write your note..."
            onChange={(event) => {
              setBody(event.target.value);
            }}
            value={body}
          />
        </label>
      </Form>
    );
  };

  return (
    <>
      <Main>
        {_getForm()}
        <button onClick={saveNote}>Add note</button>
        <button onClick={getNote}>Show note</button>
        <Wrapper>
          <Column>
            <ColumnTitle>To do</ColumnTitle>
            {notes ? (
              notes.map((note, i) => {
                return (
                  <Note key={i}>
                    <ColorBorder color={colors[4]}>
                      <NoteTitle>{note.title}</NoteTitle>
                      <Data>{date}</Data>
                      <Paragraph>{note.body}</Paragraph>
                      <div>
                        <Button
                          background="#759CC9"
                          color="#759CC9"
                          onClick={updateNote}
                          style={{ cursor: 'pointer' }}
                        >
                          Edit
                        </Button>
                        <Button
                          background="#DD302F"
                          color="#DD302F"
                          onClick={removeNote}
                          style={{ cursor: 'pointer' }}
                        >
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
