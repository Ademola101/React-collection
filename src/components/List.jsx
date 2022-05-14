import React from 'react';

const List = ({data}) => {
  return (<> <ul>
  {data.map(d => { return(
    <li>
      {d.name}
    </li>
  )})} </ul>
  </>)
}

export default List;
