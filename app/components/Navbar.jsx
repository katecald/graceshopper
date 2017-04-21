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
                    <li><a href="#">Log In</a></li>
                    <li><a href="#">Sign Up</a></li>
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">Sign Out</a></li>
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

const mapState = ({ cartQuantity }) => ({ cartQuantity })

export default connect(mapState, null)(Navbar)
