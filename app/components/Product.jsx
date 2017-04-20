import React from 'react'
import {connect} from 'react-redux'

const Product = (props) => {
  console.log('PROPS', props)
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
        <div className='text-center'>
          <button className='btn btn-info'>
            Add To Cart
          </button>
        </div>
     </div>
  )
}

const mapState = ({product}) => ({product})

export default connect(mapState, null)(Product)
