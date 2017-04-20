import React, { Component } from 'react'
import Navbar from './Navbar'
import { connect } from 'react-redux'
import { clickAction } from '../reducers/CartReducer'

class AppContainer extends Component {

  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = { quantity: null }
  }

  handleClick(e) {
    this.props.clickAction(e.target.value, this.state.quantity)
  }

  handleChange(e) {
    console.log(e.target, e.target.value)
    this.setState({quantity: e.target.value})
      // { quantity: {
    //   productId: quantityInDropDown
    // }
  // })
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

