import React, { useState } from 'react';
import { Header } from '../components/Header';
import { FilterMenu } from '../components/FilterMenu';

import { RightSide, Column, Note, NoteTitle, Paragraph, Data, ColorBorder, ColumnTitle, Button, Body } from '../components/noteComponents';
import { useModal } from '../../hooks/useModal';

export default function NotesApp() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [obj, setObj] = useState({
    title: 'Title',
    body: 'Here comes your note'
  });
  const [color] = useState('');
  const [notes] = useState([obj]);
  const { show, DisplayModal } = useModal();

  let colors = ['#ECAE20', 'black', 'white', 'pink', 'yellow', 'green', 'blue'];

  function saveNote() {
    let object = { title: title, body: body, color: color };
    notes.push(object);
    let serializedNotes = JSON.stringify(notes);
    localStorage.setItem('Notes', serializedNotes);
    let notes = JSON.parse(localStorage.getItem('Notes'));
    setObj(notes);
  }
  /* 
    function getNote() {
      let notes = JSON.parse(localStorage.getItem('Notes'));
      setObj(notes);
    } */

  function removeNote() {
    alert('Comming soon...');
  }

  function updateNote() {
    alert('Comming soon...');
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
                <ColorBorder color={colors[4]}>
                  <NoteTitle>{note.title}</NoteTitle>
                  <Data>{date}</Data>
                  <Paragraph>{note.body}</Paragraph>
                  <div>
                    <Button background="#2196F3" color="#2196F3" onClick={updateNote} style={{ cursor: 'pointer' }}>
                      Edit
                    </Button>
                    <Button background="#D06778" color="#DD302F" onClick={removeNote} style={{ cursor: 'pointer' }}>
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
        <DisplayModal addNote={saveNote} modalHeaderText="Modal Title">
          <input
            type="text"
            placeholder="title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            value={title}
          />
          <input
            type="text"
            placeholder="text..."
            onChange={(event) => {
              setBody(event.target.value);
            }}
            value={body}
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
