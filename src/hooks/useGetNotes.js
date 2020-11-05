import React, { useEffect, useState } from 'react';

function useGetNotes() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(false);

  useEffect(() => {
    async function getAllNotes() {
      try {
        setIsLoading(true);
        const response = await fetch(process.env.REACT_APP_NOTES_API || 'https://my-json-server.typicode.com/EraAmate/agile-learning/notes');
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
