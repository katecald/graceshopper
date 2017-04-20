import React, { Component } from 'react'
import Navbar from './Navbar'
import { connect } from 'react-redux'
import { clickAction } from '../reducers/CartReducer'

class AppContainer extends Component {

  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = { quantity: {} }
  }

  handleClick(e) {
    const productId = e.target.value
    const quantity = this.state.quantity.productId || 1
    this.props.clickAction(productId, quantity)
  }

  handleChange(e) {
    const productId = e.target.id
    const quantity = +e.target.value
    this.setState({quantity: {productId: quantity}})
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Navbar />
        </div>
        <div className="row" id="page-content">
          {
            this.props.children && React.cloneElement(
              this.props.children,
              Object.assign({
                handleClick: this.handleClick,
                handleChange: this.handleChange
              },
                this.props)
            )
          }
        </div>
      </div>
    )
  }
}

export default connect(null, { clickAction })(AppContainer)

