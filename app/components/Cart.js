import React from 'react'
import { Link } from 'react-router'

const Cart = () => (
    <div>
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
                <tr>
                    <td><img className='cart-img' src='http://img.clipartall.com/anime-santa-claus-clipart-clipart-santa-claus-3500_3282.png' /></td>
                    <td><Link>Santa Claus Package</Link></td>
                    <td>$99.99</td>
                    <td>1</td>
                    <td><button className='btn-danger'>X</button></td>
                </tr>
            </tbody>
        </table>
    </div>
)

export default Cart
