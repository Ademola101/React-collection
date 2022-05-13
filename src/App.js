import Note from "./components/Note"
import { useState, useEffect } from "react"
import axios from "axios"


const App = () => {

  const [countries, setCountries] = useState([])

  const data = () => {
    axios.get("https://restcountries.com/v3.1/all").then(response => {
      setCountries(response.data)
      
    })


  };

  useEffect(data,[])
  console.log(countries);
    return ( <>
    
    
    </>
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