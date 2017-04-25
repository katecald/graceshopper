import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

const Cart = props => {

const orderTotal = props.cart.reduce((pre, cur) => {
  return pre + cur.price / 100 * cur.quantity
}, 0).toFixed(2)

return (<div>
        <h1>Cart</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th></th>
                    <th>Product Info</th>
                    <th>Item Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.cart.map(product => (
                        <tr key={product.id}>
                            <td><img className='cart-img' src={product.imageURL} /></td>
                            <td><Link to={`/products/${product.id}`}>{product.name}</Link></td>
                            <td>${product.price / 100}</td>
                            <td>{product.quantity}</td>
                            <td>${((product.price / 100) * product.quantity).toFixed(2)}</td>
                            <td><button onClick={props.handleDelete} id={product.id} className='btn-danger'>X</button></td>
                        </tr>
                    )
                    )}
                <tr>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td id='order-total'>
                        {`Total: $${orderTotal}`}
                    </td>
                    <td />
               </tr>
            </tbody>
        </table>
        <div className='text-center'>
            <Link to='/checkout' className='btn btn-success'>Checkout</Link>
        </div>
    </div>
    )
}
    
    

const mapState = ({ cart }) => ({ cart })

export default connect(mapState, null)(Cart)
