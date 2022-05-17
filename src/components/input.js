import React from 'react';

const Input = ({value, onChange}) => {
  
   
  return (<>
  
<label > Find countries </label>
  <input type= "text" value={value} onChange = {onChange}/>  
  </>

  

  )
}

export default Input;
