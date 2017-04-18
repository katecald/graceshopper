import React from 'react'
import {connect} from 'react-redux'

const Products = (props) => {
  console.log(props)
  return (
    <div>
      <div>
          <h1>Holiday Helper</h1>
          <h3>Because holidays don't need to be awful.</h3>

          </div>
            {
              props.products.products.map(product => {
                return (
                  <div key={product.id} className='col-md-4' >
                    <img src={product.imageURL} className='product-img' />
                    <h1>
                      {product.name}
                    </h1>
                    <h3>
                      ${product.price/100}
                    </h3>
                  </div>
                )
                })
            }
      </div>
  )
}

const mapState = ({products}) => ({products})

export default connect(mapState, null)(Products)


