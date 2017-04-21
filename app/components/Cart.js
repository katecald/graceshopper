import React from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import { connect } from 'react-redux'



const Cart = props =>
    (<div>
        <h1>Cart</h1>
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
                props.cart.map(product => (
                <tr key={product.id}>
                    <td><img className='cart-img' src={product.imageURL}/></td>
                    <td><Link to={`/products/${product.id}`}>{product.name}</Link></td>
                    <td>${product.price/100}</td>
                    <td>{product.quantity}</td>
                    <td><button className='btn-danger'>X</button></td>
                </tr>
                )
            )}
            </tbody>
        </table>
        <div className='text-center'>
          <Link to='/checkout' className='btn btn-success'>Checkout</Link>
        </div>
    </div>
)

const mapState = ({cart}) => ({cart})

export default connect(mapState, null)(Cart)
