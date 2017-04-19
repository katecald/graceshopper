import React from 'react'
import {connect} from 'react-redux'

// need to set currentProduct on state when a product is selected in main view
const Product = (props) => {
  console.log('PROPS', props)
  return (
    <div>
      <img src={props.currentProduct.imageURL} />
        <h1>
          {props.currentProduct.name}
        </h1>
        <h3>
          ${props.currentProduct.price/100}
        </h3>
        <h4>
          {props.currentProduct.description}
        </h4>
        <button>
          Add To Cart
        </button>
     </div>
  )
}

// need to set currentProduct on state when a product is selected in main view
const mapState = ({currentProduct}) => ({currentProduct})

export default connect(mapState, null)(Product)
