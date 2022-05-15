import Note from "./components/Note"
import { useState, useEffect } from "react"
import axios from "axios"
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
    axios.get("https://restcountries.com/v3.1/all").then(response => {
  if(userInput !== "") {
    const searchResult = response.data.filter(country => country.name.common.toLowerCase().includes(userInput.toLocaleLowerCase()));
    setCountries(searchResult);
  }    
  
  
  },[userInput]);


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