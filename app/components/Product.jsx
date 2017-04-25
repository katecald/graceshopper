import React from 'react'
import {connect} from 'react-redux'

const Product = (props) => {
  return (
    <div id='single-product'>
      <img className='single-product-img' src={`/${props.product.imageURL}`} />
        <h1>
          {props.product.name}
        </h1>
        <h3>
          ${props.product.price/100}
        </h3>
        <h4>
          {props.product.description}
        </h4>
        <table className='text-center'>
        <tr>
        <td>
          <button className='btn btn-info' value={props.product.id} onClick={props.handleClick}>
            Add To Cart
          </button>
          </td>
          <td className='quantity'>
          <label htmlFor="quantity">Qty</label>
          <select id={props.product.id} onChange={props.handleQuantityChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          </td>
          </tr>
        </table>
     </div>
  )
}

const mapState = ({product}) => ({product})

export default connect(mapState, null)(Product)
