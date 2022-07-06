import React from 'react'
import { PropTypes } from 'prop-types'
const LoginForm = ({ onSubmit, username, password, handleUsernameChange, handlePawwordChange }) => {
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
  )
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handlePawwordChange: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default LoginForm
