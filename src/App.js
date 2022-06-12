import { useState, useEffect } from "react";
import axios from "axios";
import Input from "./components/input";
import CountryName from "./components/CountryName";
import OneCountry from "./components/OneCountry";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [log, setLog] = useState("");
  const [lat, setLat] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
      
    });
    
  }, [userInput]);



  const textOnChange = (event) => {
    setUserInput(event.target.value);
  };

  // const onClick = (country) => {
  //   setDetails(!details);
  // };
if (userInput !== "") {
  var countriesToShow = countries.filter((country) =>
  country.name.common.toLowerCase().startsWith(userInput.toLocaleLowerCase())
);

}

else {
countriesToShow = []
}
  
  return (
    <>
      <Input value={userInput} onChange={textOnChange} />

      {countriesToShow.length === 0 ? (
        <div></div>
      ) : countriesToShow.length >= 10 ? (
        <div>Too many macthes</div>
      ) : countriesToShow.length === 1 ? (
        <OneCountry countries={countriesToShow} />
      ) : (
        <ul>
          {countriesToShow.map((country) => {
            return <CountryName country={country} />;
          })}
        </ul>
      )}
    </>
  );
};
export default App;
