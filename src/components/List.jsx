import React from 'react';
import { appContext } from '../Helper/context';
import { useContext } from 'react';

const List = ({data}) => {

  const {userInput} = useContext(appContext)
  const filterItems = (arr, query) => {
    return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  }
  
  return (<> 
  
  <ul>
   {data.map(home => <div>{filterItems(home.name.common,userInput)}</div>)}
  </ul>
  </>)
}

export default List;
