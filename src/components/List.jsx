import React from 'react';

const List = ({data}) => {
  
  return (<> <ul>
   {data.map(home => <div>{home.name}</div>)}
  </ul>
  </>)
}

export default List;
