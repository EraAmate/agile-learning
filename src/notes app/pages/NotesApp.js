import React, { useState, useEffect } from 'react';
import { deleteNote, getAllNotes, postNote } from '../api/notes';
import { FilterMenu } from '../components/FilterMenu';
import { Header } from '../components/Header';
import Loading from '../components/Loading';
import { Body, Button, ColorBorder, Column, ColumnTitle, Data, Note, NoteTitle, Paragraph, RightSide } from '../components/noteComponents';

import useGetNotes from '../hooks/useGetNotes';
import useModal from '../hooks/useModal';

export default function NotesApp() {
  const [searchWord, setSearchWord] = useState('');

  const { show, DisplayModal, hide, title, body } = useModal();
  const { notes, isLoading, setNotes } = useGetNotes();

  function getDate() {
    let today = new Date();
    let date = today.getDate() + '.' + today.toLocaleString('default', { month: 'short' }) + '.' + today.getFullYear();
    return date;
  }

  async function handleAddNote(event) {
    event.preventDefault();

    const note = {
      title: title,
      body: body,
      date: getDate()
    };
    console.log(note);
    const createdNote = await postNote(note);
    setNotes([...notes, createdNote]);
    hide();
  }

  async function handleDelete(id) {
    await deleteNote(id);
    const notes = await getAllNotes();
    setNotes(notes);
  }

  useEffect(() => {
    async function doFilter() {
      let result = notes.filter((note) => note.title.toLowerCase().includes(searchWord.toLowerCase(), 0));
      setNotes(result);
      console.log(searchWord);

      if (!searchWord) {
        const notes = await getAllNotes();
        setNotes(notes);
      }
    }
    doFilter();
  }, [searchWord]);

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
                  <Data>{note.date}</Data>
                  <Paragraph>{note.body}</Paragraph>
                  <div>
                    <Button background="#2196F3" color="#2196F3">
                      Edit
                    </Button>
                    <Button background="#D06778" color="#DD302F" onClick={() => handleDelete(note.id)}>
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
      <Header text="Notes" onClick={show} value={searchWord} inputOnChange={(e) => setSearchWord(e.target.value)} />
      <Body>
        <FilterMenu />
        <DisplayModal addNote={handleAddNote} modalHeaderText="Create new note" />
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
