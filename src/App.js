
import { useState, useEffect } from "react"
import axios from "axios"
import Input from "./components/input"
import List from "./components/List"




const App = () => {

  const [countries, setCountries] = useState([])
  const [userInput, setUserInput] = useState("")
  const [countriesToShow,setCountriesToShow] = useState([])

  

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then(response => {

    setCountries(response.data)
  
  });


  },[userInput]);
  const textOnChange = (event) => {
    setUserInput(event.target.value)
    if(userInput !== "") 
    {setCountriesToShow(countries.filter(country => country.name.common.toLowerCase().startsWith(userInput)))}
    
   };  


  
    return ( <> 
<Input value={userInput} onChange={textOnChange}/>
  <List countries={countriesToShow}/>
  
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