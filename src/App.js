import Note from './components/Note'
import { useState, useEffect, useRef } from 'react'
import Notification from './components/Notification'
import noteService from './services/noteService'
import Footer from './components/Footer'
import loginServies from './services/login'
import LoginForm from './components/Login'
import NoteForm from './components/NoteForm'
import Togglable from './components/Togglable'

const App = () => {
  const [notes, setNotes] = useState([])
  const [loginVisible, setLoginVisible]  = useState(false)
  const noteFormRef = useRef()
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const user = await loginServies.login({ username, password })
      setUser(user)
      noteService.setToken(user.token)
      window.localStorage.setItem('loggedAppuser', JSON.stringify(user))
      setUsername('')
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
      console.log('promise fulfied')
      console.log(user)
      setNotes(initialNotes)
    })
  },[])

  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem('loggedAppuser')
    if(loggedUserJson){
      const user = JSON.parse(loggedUserJson)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, [])

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  const addNote = (noteObject) => {
    noteFormRef.current.toggleVisibility()
    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
      })
  }

  const toggleImportance = (id) => {


    const note = notes.find((note  => note.id ===id))
    const changeNote = { ...note, important: !note.important }
    noteService.update(id, changeNote).then(response => {
      setNotes(notes.map((note => note.id !== id ? note : response.data)))

    }).catch(() => {
      setErrorMessage(`Note ${note.concat} was already removed from the server`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      setNotes(notes.filter(n => n.id !== id))
    })

  }

  const loginform = () => {

    const hiddenWhenVisible = { display: loginVisible ? 'none' : '' }
    const showWhenVisible = { display: loginVisible ? '' : 'none' }

    return(
      <div>
        <div style={hiddenWhenVisible}>

          <button onClick={() => setLoginVisible(true)}> login</button>
        </div>

        <div style={showWhenVisible}>
          <LoginForm username={username} password = {password}
            handlePawwordChange = {({ target }) => setPassword(target.value)}

            handleUsernameChange = {({ target }) => setUsername(target.value)} onSubmit = {handleLogin}/>
          <button onClick={() => setLoginVisible(false)}> cancel</button>
        </div>
      </div>
    )

  }




  return (
    <div>
      <h1>Notes</h1>



      <Notification message={errorMessage} />
      {user === null ?  loginform(): (<> <Togglable buttonLabel = 'new Note' ref = {noteFormRef}> <NoteForm createNote={addNote}/> </Togglable>
        <button onClick={() => {setUser(null)
          window.localStorage.clear()}}> logout</button> </>) }


      <button onClick={() => {
        setShowAll(!showAll)
      }}>
  show {showAll ? 'important' : 'all'}

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