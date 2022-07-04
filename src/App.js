import Note from "./components/Note"
import { useState, useEffect } from "react"
import Notification from "./components/Notification"
import noteService from "./services/noteService"
import Footer from "./components/Footer"
import loginServies from "./services/login"

const App = () => {
  const [notes, setNotes] = useState([]);

  const [newNote, setNewNote] = useState("a new note");
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginServies.login({username, password})
      setUser(user)
      noteService.setToken(user.token)
      window.localStorage.setItem('loggedAppuser', JSON.stringify(user))
      setUsername('');
      setPassword('')
    }

    catch(error) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
    
  }
  
  useEffect(() => {
    
    noteService.getAll().then(initialNotes => {
      console.log("promise fulfied");
      setNotes(initialNotes)
    })
  },[])

  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem('loggedAppuser')
    if(loggedUserJson){
      const user = JSON.parse(loggedUserJson);
      setUser(user);
      noteService.setToken(user.token)
    }
  }, [])
  
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
    noteService.create(noteObject).then(returnedNote => {
      setNotes(notes.concat(returnedNote));
      setNewNote("")
    })
  }
  const handleNoteChange = (event) => {
    
    setNewNote(event.target.value)
  };

  const toggleImportance = (id) => {


const note = notes.find((note  => note.id ===id))
const changeNote = {...note, important: !note.important};
noteService.update(id, changeNote).then(response => {
  setNotes(notes.map((note => note.id !== id ? note : response.data)))

}).catch((error) => {
 setErrorMessage(`Note ${note.concat} was already removed from the server`)
 setTimeout(() => {
  setErrorMessage(null)
 }, 5000)
  setNotes(notes.filter(n => n.id !== id))
})

  }

  const Loginform = () => (
    
    <>
    <form onSubmit={handleLogin}>
<div>
  <label htmlFor="username">Username</label> <br />
  <input type="text" name="username" value={username} onChange = {({target}) => setUsername(target.value)}/>
</div>
<div>
  <label htmlFor="password">Password</label> <br />
  <input type="password" name="password" value={password} onChange = {({target}) => setPassword(target.value)} />
</div>
<button> Login </button>

      </form>
    </>
  );

  const noteForm = () => (
     <>
     <p> {user.username} log in</p>
      <form onSubmit={addNote} >
            
      <input value={newNote} onChange ={handleNoteChange}/>
      <button type="submit">save</button>
    </form>  
    </>
    

  )

  
  
    return (
      <div>
        <h1>Notes</h1>
        
      

<Notification message={errorMessage} />
{user !== null ? noteForm() : Loginform()} 


      <button onClick={()=>{
  setShowAll(!showAll)
}}>
  show {showAll ? "important" : "all"}

</button> <ul>
        {notesToShow.map(note => 
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportance(note.id)}
          />
        )}
      </ul>
<Footer/>
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