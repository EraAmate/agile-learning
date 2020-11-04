import { useEffect, useState } from 'react';

function useGetNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function getAllNotes() {
      const response = await fetch(process.env.NOTES_API || 'https://my-json-server.typicode.com/EraAmate/agile-learning/notes');
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const notes = await response.json();
      setNotes(notes);
    }
    getAllNotes();
  }, []);
  return { notes };
}

export default useGetNotes;
