import React, { Component } from 'react'
import {browserHistory} from 'react-router'
import axios from 'axios'
import Navbar from './Navbar'
import { connect } from 'react-redux'
import { addToCart, deleteFromCart } from '../reducers/CartReducer'
import { cartQuantity } from '../reducers/QuantityReducer'

class AppContainer extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleQuantityChange = this.handleQuantityChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleCheckout = this.handleCheckout.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.state = {
      quantity: {},
      confirmationEmailAddress: ''
    }
  }

  handleClick(e) {
    const productId = e.target.value
    const quantity = this.state.quantity[productId] || 1
    this.props.addToCart(productId, quantity)
    this.props.cartQuantity(quantity)
  }

  handleQuantityChange(e) {
    const productId = e.target.id
    const quantity = +e.target.value
    this.setState({quantity: {[productId]: quantity}})
  }

  handleEmailChange(e) {
    this.setState({confirmationEmailAddress: e.target.value})
  }

  handleCheckout(e) {
    e.preventDefault()
    axios.post('api/email', {
      email: this.state.confirmationEmailAddress,
      name: e.target.formName.value,
      address: e.target.formStreet.value + '\n'
        + e.target.formCity.value + ', '
        + e.target.formSelectState.value + ' '
        + e.target.formZip.value,
      phone: e.target.formPhone.value
    })
      .catch(console.error)
  }

  handleDelete(e) {
    e.preventDefault()
    const productId = e.target.id
    this.props.deleteFromCart(productId)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Navbar />
        </div>
        <div className="row" id="page-content">
          {
            this.props.children && React.cloneElement(
              this.props.children,
              Object.assign({
                handleClick: this.handleClick,
                handleQuantityChange: this.handleQuantityChange,
                handleCheckout: this.handleCheckout,
                handleEmailChange: this.handleEmailChange,
                handleDelete: this.handleDelete
              },
                this.props)
            )
          }
        </div>
      </div>
    )
  }
}

export default connect(null, { addToCart, cartQuantity, deleteFromCart })(AppContainer)
