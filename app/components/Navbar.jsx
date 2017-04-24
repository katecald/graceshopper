import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

const Navbar = (props) => (
    <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">

            <div className="navbar-header">

                <Link to='/' className="navbar-brand">Holiday Helper</Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-left">
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">My Account</Link></li>
                    <li><Link to="/login">Sign Out</Link></li>
                </ul>

                <ul className="nav navbar-nav navbar-right">
                    <li>
                      <Link to="/cart">
                        <span style={{fontSize: '25px'}} className="glyphicon glyphicon-shopping-cart"></span>
                        <span>{props.cartQuantity}</span>
                      </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

const mapState = ({ cart }) => ({ cart })
  // cartQuantity: cart.reduce(
  //   (count, line) => count + line.quantity, 0) })

export default connect(mapState, null)(Navbar)
