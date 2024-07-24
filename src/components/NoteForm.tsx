import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from "@mui/material/Zoom";


interface NoteData {
  title: string;
  content: string;
}

interface NoteFormProps {
  onSubmit: (note:NoteData) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ onSubmit }) => {
  const [inputText, setInputText] = useState<NoteData>({title:"", content:""});
  const [expanded, setExpanded] = useState(false)

  function updateText(e: React.ChangeEvent<HTMLInputElement| HTMLTextAreaElement>){
    const {name, value} = e.target

    setInputText(PrevValue=>({
        ...PrevValue, [name]:value 
    }))
  }

  function expand(){
      setExpanded(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(inputText);
    setInputText({title:"", content:""})
  };

  return (
    <div className="input-container">
    <form className="input-form" onSubmit={handleSubmit}>
      {expanded && (
        <input className="input-title" type="text" name="title" 
                placeholder="Title" value={inputText.title} 
                onChange={updateText}/>)}
        <textarea className="input-content" onClick={expand}
                    name="content" placeholder="Take a note..." 
                    value={inputText.content} onChange={updateText}
                    rows={expanded? 3:1}
                    />
        <Zoom in={expanded}>
        <Fab className="input-button" type="submit"><AddIcon/></Fab>
        </Zoom>
    </form>
    </div>
  );
};

export default NoteForm;
