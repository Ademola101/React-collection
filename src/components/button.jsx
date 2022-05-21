import React from 'react';
import { appContext } from '../Helper/context';
import { useContext } from 'react';

const Button = ({onclick,country}) => {

  const {setDetails}  = useContext(appContext);

  return (<button onClick = {onclick}>
show more
  </button>
  );
}

export default Button;
