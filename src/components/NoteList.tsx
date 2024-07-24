import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

interface Note {
  _id: string;
  title: string;
  content: string;
}

interface NoteListProps {
  notes: Note[];
  onDelete: (id: string) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onDelete }) => {
  return (
    <div className="note-group">
      {notes.map((note) => (
        <div className="note-cover" key={note._id}>
          <h3 className="app-title">{note.title}</h3>
          <p className="app-content">{note.content}</p>
          <button className="delete-button" onClick={() => onDelete(note._id)}><DeleteIcon/></button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
