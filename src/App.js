import Note from "./components/Note"
import { useState, useEffect } from "react"
import Axios from "axios"
import Input from "./components/input"
import List from "./components/List"
import { appContext } from "./Helper/context"



const App = () => {

  const [countries, setCountries] = useState([])
  const [userInput, setUserInput] = useState("")

  const textOnChange = (event) => {
    setUserInput(event.target.value)
   };  

  useEffect(() => {
    Axios.get("https://restcountries.com/v3.1/all").then(response => {
      setCountries(response.data)
      console.log(countries);
    },[]);


  });


  
    return ( <> <appContext.Provider value={{userInput,setUserInput}}>
    
<Input onChange={textOnChange}/>
  <List data={countries}/>
  </appContext.Provider>
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