import React, { useEffect, useState } from 'react';

const NOTES_API_URL = process.env.REACT_APP_NOTES_API || 'https://my-json-server.typicode.com/EraAmate/agile-learning/notes';

function useGetNotes() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(false);

  useEffect(() => {
    async function getAllNotes() {
      try {
        setIsLoading(true);
        const response = await fetch(NOTES_API_URL);
        const notes = await response.json();
        setNotes(notes);
        setIsLoading(false);
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
    getAllNotes();
  }, []);
  return { notes, isLoading, errorMessage, setNotes };
}

export default useGetNotes;
