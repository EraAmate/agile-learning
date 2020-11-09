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

export async function getAllNotes() {
  const response = await fetch(NOTES_API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const notes = await response.json();
  return notes;
}

export async function deleteNote(id) {
  const response = await fetch(`${NOTES_API_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}
