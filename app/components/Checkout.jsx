import React from 'react'

const Checkout = (props) => (
  <div id='checkout'>
    <h1>Checkout</h1>
    <form onSubmit={props.handleCheckout}>
      <div className="form-group">
        <label htmlFor="formName">Name</label>
        <input type="text" className="form-control" name="formName" placeholder="Enter full name" required/>
      </div>
      <div className="form-group">
        <label htmlFor="formEmail">Email Address</label>
        <input onChange={props.handleEmailChange} type="email" className="form-control" name="formEmail" placeholder="Enter email" required/>
      </div>
      <div className="form-group">
        <label htmlFor="formStreet">Street</label>
        <input type="text" className="form-control" name="formStreet" placeholder="Enter street address" required/>
      </div>
      <div className="form-group">
        <label htmlFor="formCity">City</label>
        <input type="text" className="form-control" name="formCity" placeholder="Enter city" required/>
      </div>
      <div className="form-group">
        <label htmlFor="formSelectState">State</label>
        <select className="form-control" name="formSelectState">
          <option>NY</option>
          <option>CA</option>
          <option>CT</option>
          <option>MA</option>
          <option>FL</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="formZip">Zip Code</label>
        <input type="text" className="form-control" name="formZip" placeholder="Enter zip code" required/>
      </div>
      <div className="form-group">
        <label htmlFor="formPhone">Phone Number</label>
        <input type="text" className="form-control" name="formPhone" placeholder="Enter phone number" required/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
)

export default Checkout
