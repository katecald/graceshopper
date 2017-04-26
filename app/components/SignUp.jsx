import React from 'react'
import axios from 'axios'
import { browserHistory } from 'react-router'
import { login } from 'APP/app/reducers/auth'
import { connect } from 'react-redux'

export const SignUp = (props) => {

  const handleSignup = (e) => {
    e.preventDefault()
    const email = e.target.email.value, password = e.target.password.value
    const newUser = {
      name: e.target.name.value,
      email: email,
      password: password
    }
    axios.post('api/users', newUser)
    .then(() => {
      props.login(email, password)
    })
    .then(browserHistory.replace('/products'))
    .catch(console.error)
  }

  return (
    <div id='signup'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label htmlFor="formName">Name</label><br/>
          <input type="text" name="name" className="form-control" className="formName" placeholder="Enter full name" required/>
        </div>
        <div className="form-group">
          <label htmlFor="formName">Email Address</label><br/>
          <input type="email" name="email" className="form-control" className="formEmail" placeholder="Enter email" required/>
        </div>
        <div className="form-group">
          <label htmlFor="formEmail">Password</label><br/>
          <input type="password" name="password" className="form-control" className="formPassword" placeholder="Enter password" required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default connect(state => ({}), { login })(SignUp)
