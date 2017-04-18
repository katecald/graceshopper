import React from 'react'
import { Link } from 'react-router'
import {connect} from 'react-redux'

const Products = (props) => {
  return (
    <div>
      <div>
          <h1>Holiday Helper</h1>
          <h3>Because holidays don't need to be awful.</h3>

          </div>
            {
              props.products.products.map(product => {
                return (
                  <div key={product.id} className='.col-md-4'>
                  <Link to={`/products/${product.id}`}>
                    <img src={product.imageURL} />
                    <h1>
                      {product.name}
                    </h1>
                    <h3>
                      $ {product.price/100}
                    </h3>
                  </Link>
                  <button>
                    Add To Cart
                  </button>
                  </div>
                )
              })
            }
      </div>
  )
}

const mapState = ({products}) => ({products})

export default connect(mapState, null)(Products)
