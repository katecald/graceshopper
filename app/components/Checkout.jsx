import React from 'react'

const Checkout = () => (
<div id='checkout'>
    <h1>Checkout</h1>
    <form>
    <div className="form-group">
        <label for="formName">Name</label>
        <input type="text" className="form-control" id="formName" placeholder="Enter full name" />
    </div>
    <div className="form-group">
        <label for="formEmail">Email Address</label>
        <input type="email" className="form-control" id="formEmail" placeholder="Enter email" />
    </div>
    <div className="form-group">
        <label for="formStreet">Street</label>
        <input type="text" className="form-control" id="formStreet" placeholder="Enter street address" />
    </div>
    <div className="form-group">
        <label for="formCity">City</label>
        <input type="text" className="form-control" id="formCity" placeholder="Enter city" />
    </div>
    <div className="form-group">
        <label for="formSelectState">State</label>
        <select className="form-control" id="formSelectState">
        <option>NY</option>
        <option>CA</option>
        <option>CT</option>
        <option>MA</option>
        <option>FL</option>
        </select>
    </div>
    <div className="form-group">
        <label for="formZip">Zip Code</label>
        <input type="text" className="form-control" id="formZip" placeholder="Enter zip code" />
    </div>
    <div className="form-group">
        <label for="formPhone">Phone Number</label>
        <input type="text" className="form-control" id="formPhone" placeholder="Enter phone number" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>
)

export default Checkout
