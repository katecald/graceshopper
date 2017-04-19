import React from 'react'
import {connect} from 'react-redux'

// props.product.currentProduct will become props.product after refactoring
const Product = (props) => {
  console.log('PROPS', props)
  return (
    <div id='single-product'>
      <img className='single-product-img' src={`/${props.product.currentProduct.imageURL}`} />
        <h1>
          {props.product.currentProduct.name}
        </h1>
        <h3>
          ${props.product.currentProduct.price/100}
        </h3>
        <h4>
          {props.product.currentProduct.description}
        </h4>
        <div className='text-center'>
          <button className='btn btn-info'>
            Add To Cart
          </button>
        </div>
     </div>
  )
}

// currentProduct will become product after refactoring
const mapState = ({product}) => ({product})

export default connect(mapState, null)(Product)
