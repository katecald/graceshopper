import React from 'react'
import { connect } from 'react-redux'
import {loadAccount} from '../reducers/AccountReducer'

const OrderHistory = (props) => {
  return (
        <div>
        <h1>Order History</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th></th>
                    <th>Product Info</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
            {
                props.orders.map(order => (
                    order.map(product => {
                    <tr key={order.id}>
                        <td><Link to={`/products/${product.id}`}>{product.name}</Link></td>
                         <td>${product.price/100}</td>
                        <td>{product.quantity}</td>
                         </tr>
                    })
                )
            )}
            </tbody>
        </table>
        <div className='text-center'>
          <Link to='/checkout' className='btn btn-success'>Checkout</Link>
        </div>
    </div>
    )
}

const mapState = ({orders}) => ({orders})

export default connect(mapState, null)(OrderHistory); 