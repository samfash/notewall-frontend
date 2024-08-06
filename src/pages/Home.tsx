import React, { useEffect, useState } from 'react';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';
import { getNotes, createNote, deleteNote } from '../services/noteService';
import {logout} from '../services/authService'
import { useNavigate } from 'react-router-dom';
import '../assets/css/home.css'


interface NoteData {
  title: string;
  content: string;
}

const Home: React.FC = () => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    const notes = await getNotes();
    setNotes(notes);
  };

  const handleAddNote = async (noteData: NoteData) => {
    await createNote(noteData);
    loadNotes();
  };

  const handleDeleteNote = async (id: string) => {
    await deleteNote(id);
    loadNotes();
  };

  function handleLogout(){
    logout()
    navigate('/login');
  }

  return (
    <div className='home-back'>
      <button type='button' onClick={handleLogout}>Logout</button>
      <NoteForm onSubmit={handleAddNote} />
      <NoteList notes={notes} onDelete={handleDeleteNote} />
    </div>
  );
};

export default Home;
