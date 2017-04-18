import React from 'react'
import {connect} from 'react-redux'

const Product = (props) => {
  const name='santa', imageURL='http://img.clipartall.com/anime-santa-claus-clipart-clipart-santa-claus-3500_3282.png', price=10000, description='santa!', style={height: 800, width: 800}
  // console.log('PROPS', props)
  return (
    <div>
      <img src={imageURL} style={style} />
        <h1>
          {name}
        </h1>
        <h3>
          ${price/100}
        </h3>
        <h4>
          {description}
        </h4>
        <button>
          Add To Cart
        </button>
     </div>
  )
}

const mapState = ({currentProduct}) => ({currentProduct})

export default connect(mapState, null)(Product)
