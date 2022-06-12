import React from 'react';
import Weather from './Weather';

const OneCountry = ({countries}) => {
  return ( <><ul>
    {countries.map(country => { return(<li>
      <div>
      Country name : {country.name.common} <br />
     Capital : {country.capital} <br />
     Languages:
    {Object.values(country.languages).map(language => (
      <li key={language}>
{language}
      </li>
    ))}
<div>
<img src={country.flags.png} alt="flags" />  
</div>

      </div>
      <li>
      <Weather city={country.capital} log={country.latlng[1]} lat = {country.latlng[0]}/>  
      </li>
  
      </li>
      
    )
      })}

       </ul>
  
 

  </>
  )
}

export default OneCountry;
