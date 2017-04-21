import React from 'react'
//When Submit button is clicked, it doesn't look like handleCheckout is being called because 'api/email' is never hit
const Checkout = (props) => (
<div id='checkout'>
    <h1>Checkout</h1>
    <form>
    <div className="form-group">
        <label htmlFor="formName">Name</label>
        <input type="text" className="form-control" id="formName" placeholder="Enter full name" />
    </div>
    <div className="form-group">
        <label htmlFor="formEmail">Email Address</label>
        <input onChange={props.handleEmailChange}type="email" className="form-control" id="formEmail" placeholder="Enter email" />
    </div>
    <div className="form-group">
        <label htmlFor="formStreet">Street</label>
        <input type="text" className="form-control" id="formStreet" placeholder="Enter street address" />
    </div>
    <div className="form-group">
        <label htmlFor="formCity">City</label>
        <input type="text" className="form-control" id="formCity" placeholder="Enter city" />
    </div>
    <div className="form-group">
        <label htmlFor="formSelectState">State</label>
        <select className="form-control" id="formSelectState">
        <option>NY</option>
        <option>CA</option>
        <option>CT</option>
        <option>MA</option>
        <option>FL</option>
        </select>
    </div>
    <div className="form-group">
        <label htmlFor="formZip">Zip Code</label>
        <input type="text" className="form-control" id="formZip" placeholder="Enter zip code" />
    </div>
    <div className="form-group">
        <label htmlFor="formPhone">Phone Number</label>
        <input type="text" className="form-control" id="formPhone" placeholder="Enter phone number" />
    </div>
    <button onSubmit={props.handleCheckout} type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>
)

export default Checkout
