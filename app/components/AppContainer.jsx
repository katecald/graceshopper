import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import { connect } from 'react-redux'
import { clickAction } from '../reducers/CartReducer'

class AppContainer extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleQuantityChange = this.handleQuantityChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleCheckout = this.handleCheckout.bind(this)
    this.state = {
      quantity: {},
      confirmationEmailAddress: ''
    }
  }

  handleClick(e) {
    const productId = e.target.value
    const quantity = this.state.quantity.productId || 1
    console.log("inside handleclick: PID ", productId, " qty ", quantity)
    this.props.clickAction(productId, quantity)
  }


  handleQuantityChange(e) {
    const productId = e.target.id
    const quantity = +e.target.value
    // WHAT DOES THIS DO
    this.setState({quantity: {productId: quantity}})
  }

  handleEmailChange(e) {
    this.setState({confirmationEmailAddress: e.target.value})
  }

  handleCheckout() {
    //send email to this.state.confirmationEmailAddress
    //api/email
    axios.post('api/email', {email: this.state.confirmationEmailAddress})
      .catch(console.error)
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
                handleQuantityChange: this.handleQuantityChange,
                handleCheckout: this.handleCheckout,
                handleEmailChange: this.handleEmailChange
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
