import React from 'react'
import { browserHistory } from 'react-router'

export const Login = ({ login }) => {
  function handleLogin(e) {
    e.preventDefault()
    login(e.target.email.value, e.target.password.value)
    .then(browserHistory.replace('/products'))
    .catch(console.error)
  }

  return (<div id='login'>
    <h1>Log In</h1>
    <form onSubmit={handleLogin}>
      <div className="form-group">
        <label htmlFor="formName">Email Address</label>
        <input name="email" type="email" className="form-control" className="formEmail" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label htmlFor="formEmail">Password</label>
        <input name="password" type="password" className="form-control" className="formPassword" placeholder="Enter password" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
  )
}

import { login } from 'APP/app/reducers/auth'
import { connect } from 'react-redux'

export default connect(
  state => ({}),
  { login },
)(Login)
