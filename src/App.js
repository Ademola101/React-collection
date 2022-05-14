import Note from "./components/Note"
import { useState, useEffect } from "react"
import axios from "axios"
import Input from "./components/input"
import List from "./components/List"


const App = () => {

  const [countries, setCountries] = useState([])
  const [userInput, setUserInput] = useState("")

  

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then(response => {
      setCountries(response.data)
      
    })


  },[])

  const onChange = (event) => {
   setUserInput(event.target.value)
  };
  console.log(countries);
    return ( <>
    
<Input/>
   <List key={countries.id} data = {countries}/> 
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