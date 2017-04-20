import React, { Component } from 'react'
import Navbar from './Navbar'
import {connect} from 'react-redux'
import {addToCart} from '../reducers/CartReducer'

class AppContainer extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.state = {quantity: null}
  }

  handleClick(e) {
    console.log('HANDLING CLICK', e.target.value)
    this.props.addToCart(e.target.value)
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Navbar />
        </div>
        <div className="row" id="page-content">
        {
          this.props.children && React.cloneElement(this.props.children, Object.assign({handleClick: this.handleClick}, this.props))
        }
        </div>
      </div>
    )
  }
}

export default connect(null, {addToCart})(AppContainer)
