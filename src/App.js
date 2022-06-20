import Note from "./components/Note"
import { useState, useEffect } from "react"
import Notification from "./components/Notification"
import noteService from "./services/noteService"


const App = () => {
  const [notes, setNotes] = useState([]);

  const [newNote, setNewNote] = useState("a new note");
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState("")

  
  
  useEffect(() => {
    
    noteService.getAll().then(initialNotes => {
      console.log("promise fulfied");
      setNotes(initialNotes)
    })
  },[])
  console.log('render', notes.length, 'notes')
  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important)


  const addNote = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    }
    noteService.create(noteObject).then(response => {
      setNotes(notes.concat(response.data));
      setNewNote("")
    })
  }
  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value)
  };

  const toggleImportance = (id) => {


const note = notes.find((note  => note.id ===id))
const changeNote = {...note, important: !note.important};
noteService.update(id, changeNote).then(response => {
  setNotes(notes.map((note => note.id !== id ? note : response.data)))

}).catch((error) => {
  alert(`the note '${note.content}' was already deleted from server`)
  setNotes(notes.filter(n => n.id !== id))
})

  }
  
    return (
      <div>
        <h1>Notes</h1>
<Notification message={errorMessage} />
<button onClick={()=>{
  setShowAll(!showAll)
}}>
  show {showAll ? "important" : "all"}

</button>
        <ul>
         { notesToShow.map( note =>
  
          <Note key={note.id} note = {note} toggleImportance={() => toggleImportance(note.id)}/> )}
          {/* because toggleimportance(id) actually call the function but we dont want the fuction called unless it is clicked */}
          </ul>
          <form onSubmit={addNote} >
            
        <input value={newNote} onChange ={handleNoteChange}/>
        <button type="submit">save</button>
      </form>  
      </div>
    )
  }
   export default App 

/* const App = ({notes}) => {

console.log(notes);
  
  return (
    <div>
      <h1>Notes</h1>
      <ul>
       { notes.map( note =>

        <Note key={note.id} note = {note}/>)}
        </ul>

    </div>
  )
}
 export default App */