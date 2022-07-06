import { useState } from 'react';

const NoteForm = ({createNote, user}) => {
  const [newNote, setNewNote] = useState("a new note");

  const addNote = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    createNote({
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    

    }) 
    setNewNote("")
    }
  

  const handleNoteChange = (event) => {
    
    setNewNote(event.target.value)
  };



  return (
    <div>
      
     
     <p> Create a new note</p>
      <form onSubmit={addNote} >
            
      <input value={newNote} onChange ={handleNoteChange}/>
      <button type="submit">save</button>
    </form>  

    
    </div>
  );
}

export default NoteForm;
