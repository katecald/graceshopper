import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

const Products = (props) => {
  return (
    <div>
      <div>
        <h1>Holiday Helper</h1>
        <h3>Because holidays don't need to be awful.</h3>
      </div>
      {
        props.products.map(product => {
          return (
            <div key={product.id} className='col-md-4'>
              <Link to={`/products/${product.id}`}>
                <img src={product.imageURL} className='product-img' />
                <h1>
                  {product.name}
                </h1>
                <h3>
                  ${product.price / 100}
                </h3>
              </Link>
              <button className='btn btn-info' value={product.id} onClick={props.handleClick}>
                Add To Cart
                  </button>
                  <label htmlFor="quantity">Qty</label>
              <select onChange={props.handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          )
        })
      }
    </div>
  )
}

const mapState = ({ products }) => ({ products })

export default connect(mapState, null)(Products)
