import React from 'react';

const LoginForm = ({onSubmit, username, password, handleUsernameChange, handlePawwordChange}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>

<div>
  <label htmlFor="username">Username </label> <br />
  <input type="text" name="username" value={username} onChange = {handleUsernameChange}/>
</div>
<div>
  <label htmlFor="password">password</label> <br />
  <input type="password" name="password" value={password} onChange = {handlePawwordChange}/>  <br />
  <button>
    login
  </button>
</div>
      </form>
    </div>
  );
}

export default LoginForm;
