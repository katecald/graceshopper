import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { loadAccount } from '../reducers/AccountReducer'

const OrderHistory = (props) => {

  return (
    <div>
      <h1>Order History</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Order ID</th>
            <th></th>
            <th>Product Info</th>
            <th>Item Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
        {
          props.account.map(order => (
            order.things.map((product, idx) => {
              return (<tr key={product.id}>
                <td>{order.id}</td>
                <td><img className='cart-img' src={`/${product.imageURL}`}/></td>
                <td><Link to={`/products/${product.id}`}>{product.name}</Link></td>
                <td>${product.price/100}</td>
                <td>{order.line_items[idx].quantity}</td>
                <td>${((product.price / 100) * order.line_items[idx].quantity).toFixed(2)}</td>
              </tr>)
            })
          ))
        }
        </tbody>
      </table>
    </div>
  )
}

const mapState = ({ account }) => ({ account })

export default connect(mapState, null)(OrderHistory); 
