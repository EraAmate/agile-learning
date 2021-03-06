import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import useGetNotes from '../hooks/useGetNotes';

import { Main } from '../../common/Main';
import { FilterMenu } from '../components/filter menu/FilterMenu';
import { Header } from '../components/header/Header';
import Loading from '../components/loading/Loading';
import Modal from '../components/modal/Modal';
import { Body, ColorBorder, Column, ColumnTitle, Data, Note, NoteTitle, Paragraph, RightSide } from '../components/note/noteComponents';
import { ButtonsNav } from '../components/buttons nav/ButtonsNav';

import { deleteNote, getAllNotes, postNote } from '../api/notes';

export default function NotesApp({ switchTheme }) {
  const [searchWord, setSearchWord] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const { notes, isLoading, setNotes } = useGetNotes();

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

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
    // do not fetch here. Add fetch funct to the notes api.

    async function showAllNotes() {
      let result = notes.filter((note) => note.title.toLowerCase().includes(searchWord.toLowerCase(), 0));
      setNotes(result);
      if (!searchWord) {
        const notes = await getAllNotes();
        setNotes(notes); // use notes array copie instead of fetching again
      }
    }
    showAllNotes();
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
                  <ButtonsNav handleDelete={() => handleDelete(note.id)} />
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
    <Main>
      <Header text="Notes" onClick={show} value={searchWord} inputOnChange={(e) => setSearchWord(e.target.value)} switchTheme={switchTheme} />
      <Body>
        <FilterMenu />
        {isVisible && (
          <Modal
            addNote={handleAddNote}
            modalHeaderText="Create new note"
            title={title}
            onChangeTitle={(e) => setTitle(e.target.value)}
            body={body}
            onChangeBody={(e) => setBody(e.target.value)}
            closeModal={hide}
          />
        )}
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
    </Main>
  );
}

NotesApp.propTypes = {
  switchTheme: PropTypes.func
};
