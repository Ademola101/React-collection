import React from 'react';
import { appContext } from '../Helper/context';
import { useContext } from 'react';

const List = ({data}) => {  
  return (<> 
  
  <ul>
   {data.map(home => <div>{home.name.common}</div>)}
  </ul>
  </>)}


export default List;
