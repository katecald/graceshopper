import React from 'react'

export const SignUp = () => (
  <div id='signup'>
    <h1>Sign Up</h1>
    <form>
    <div className="form-group">
        <label htmlFor="formName">Email Address</label>
        <input type="email" className="form-control" className="formEmail" placeholder="Enter email" />
    </div>
    <div className="form-group">
        <label htmlFor="formEmail">Password</label>
        <input type="password" className="form-control" className="formPassword" placeholder="Enter password" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
)

export default SignUp; 