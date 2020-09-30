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
  ColumnTitle
} from '../components/noteComponents';

export default function NotesApp() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [obj, setObj] = useState({});
  const [notes] = useState([obj]);
  /*  const [notes, setNotes] = useState(() => {
    console.log(JSON.parse(localStorage.getItem('Notes')));
  }); */

  function saveNote() {
    let object = { title: title, body: body };

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

  return (
    <>
      <Main>
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
        <button onClick={saveNote}>Add note</button>
        <button onClick={getNote}>Show note</button>
        <Wrapper>
          <Column>
            <ColumnTitle>To do</ColumnTitle>
            {notes ? (
              notes.map((note, i) => {
                return (
                  <Note key={i}>
                    <ColorBorder>
                      <NoteTitle>{note.title}</NoteTitle>
                      <Data>{date}</Data>
                      <Paragraph>{note.body}</Paragraph>
                      <div>
                        <button
                          onClick={updateNote}
                          style={{ cursor: 'pointer' }}
                        >
                          ✏️
                        </button>
                        <button
                          onClick={removeNote}
                          style={{ cursor: 'pointer' }}
                        >
                          🗑
                        </button>
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
