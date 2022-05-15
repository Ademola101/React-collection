
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

   function filterItems(arr, query) {
    return arr.filter(function(el) {
      return el.name.common.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
  }

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then(response => {
  if(userInput !== "") {
    const searchResult = filterItems(response.data,userInput);
  
  setCountries(searchResult)}    
  
  console.log(countries);
  },[userInput]);


  });


  
    return ( <> 
<Input onChange={textOnChange}/>
  <List data={countries}/>
  
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