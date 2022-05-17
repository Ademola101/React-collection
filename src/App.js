
import { useState, useEffect } from "react"
import axios from "axios"
import Input from "./components/input"
import List from "./components/CountryName"
import OneCountry from "./components/OneCountry"




const App = () => {

  const [countries, setCountries] = useState([])
  const [userInput, setUserInput] = useState("")
  const [countriesToShow,setCountriesToShow] = useState([])

  

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then(response => {

    setCountries(response.data)
    
    }); if(userInput !== ""){
      setCountriesToShow(countries.filter(country => 
        country.name.common.toLowerCase().startsWith(userInput.toLocaleLowerCase()) ))
  
    }
    
  },[userInput]);
  
  
  const textOnChange = (event) => {
    setUserInput(event.target.value)
    

    
   };  


  
    return ( <> 
<Input value={userInput} onChange={textOnChange}/>

{countriesToShow.length  === 0 ? (<div>


</div>) : countriesToShow.length >= 10 ? (<div>
  Too many macthes
</div>) : countriesToShow.length === 1 ? (<OneCountry countries = {countriesToShow}/>)


:( <List countries={countriesToShow}/>)



}
  
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