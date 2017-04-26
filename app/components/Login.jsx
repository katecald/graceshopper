import React from 'react'
import { browserHistory } from 'react-router'
import { login } from 'APP/app/reducers/auth'
import { connect } from 'react-redux'

const Login = (props) => {
  function handleLogin(e) {
    e.preventDefault()
    props.login(e.target.email.value, e.target.password.value)
  }

  return (
    <div id='login'>
      <h1>Log In</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="formName">Email Address</label><br/>
          <input name="email" type="email" className="form-control" className="formEmail" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="formEmail">Password</label><br/>
          <input name="password" type="password" className="form-control" className="formPassword" placeholder="Enter password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

const mapState = ({ auth }) => ({ auth })

export default connect(mapState, { login })(Login)
