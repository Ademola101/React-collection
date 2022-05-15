import React from 'react';
import { appContext } from '../Helper/context';
import { useContext } from 'react';
import Note from './Note';

const List = ({data}) => {  
  return (<> 
  
  <ul>
   {data.name[0]}
  </ul>
  </>)}


export default List;
