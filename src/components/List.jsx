import React from 'react';
import { appContext } from '../Helper/context';
import { useContext } from 'react';
import Note from './Note';

const List = ({countries}) => {  
  return (<> 
  
  <ul>
   {countries.name.common}
  </ul>
  </>)}


export default List;
