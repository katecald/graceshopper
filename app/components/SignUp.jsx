import React from 'react'

export const SignUp = (props) => (
  <div id='signup'>
    <h1>Sign Up</h1>
    <form onSubmit={props.handleSignup}>
      <div className="form-group">
        <label htmlFor="formName">Name</label>
        <input type="text" name="name" className="form-control" className="formName" placeholder="Enter full name"/>
      </div>
      <div className="form-group">
        <label htmlFor="formName">Email Address</label>
        <input type="email" name="email" className="form-control" className="formEmail" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label htmlFor="formEmail">Password</label>
        <input type="password" name="password" className="form-control" className="formPassword" placeholder="Enter password" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
)

export default SignUp; 