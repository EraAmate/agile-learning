const NOTES_API_URL = process.env.REACT_APP_NOTES_API || 'https://my-json-server.typicode.com/EraAmate/agile-learning/notes';

export async function postNote(note) {
  const response = await fetch(NOTES_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const createdNote = await response.json();
  return createdNote;
}
