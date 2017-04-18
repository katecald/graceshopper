import React from 'react'
import {connect} from 'react-redux'
//import {loadProducts} from 'APP/app/reducers/ProductsReducer'


const Products = (props) => {
  console.log(props)
  return (
    <div>
      <div>
          <h1>Holiday Helper</h1>
          <h3>Because holidays don't need to be awful.</h3>

          </div> 
            {
              props.products.map(product => {
                (
                  <div>
                  <div>
                    <img src={product.imageURL} />
                    <h1>
                      {product.name}
                    </h1>
                    <h3>
                      $ {product.price/100}
                    </h3>
                  </div>
                  </div>
                )
                })
            }
      </div>
  )
}

const mapState = ({products}) => ({products})

export default connect(mapState, null)(Products)


