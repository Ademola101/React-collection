import React from 'react';

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
        
      </li>
    )
      })}
   </ul>
  
 

  </>
  )
}

export default OneCountry;
