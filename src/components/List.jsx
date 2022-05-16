import React from 'react';
import { appContext } from '../Helper/context';
import { useContext } from 'react';
import Note from './Note';

const List = ({countries}) => {  
  return (<> 
  
  <ul>
   {countries.map(country => { return(<li>
       {country.name.common}
     </li>
   )
     })}
  </ul>
  </>)}


export default List;
