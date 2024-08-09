import axios from 'axios';

const API_URL = process.env.REACT_NOTE_API_URL|| 'https://notewall-webapp.onrender.com/api/notes';

export const getNotes = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const createNote = async (note: { title: string, content: string }) => {
  const token = localStorage.getItem('token');
  await axios.post(API_URL, note, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteNote = async (id: string) => {
  const token = localStorage.getItem('token');
  await axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
