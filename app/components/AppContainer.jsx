import React, { Component } from 'react'
import Navbar from './Navbar'
import {connect} from 'react-redux'
import {clickAction} from '../reducers'

class AppContainer extends Component {

  constructor(props) {
    super(props) 

    this.handleCartClick = this.handleCartClick.bind(this)
  }

  handleCartClick() {
    props.clickAction()
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Navbar />
        </div>
        <div className="row" id="page-content">
        {
          this.props.children && React.cloneElement(this.props.children, {})
        }
        </div>
      </div>
    )
  }
} 

export default connect(null, {clickAction})(AppContainer)

