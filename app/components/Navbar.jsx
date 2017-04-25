import React from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import axios from 'axios'

const Navbar = (props) => {
  const handleLogout = () => {
    axios.post('api/auth/logout')
    .then(() => browserHistory.replace('/products'))
    .catch(console.error)
  }

    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">

                <div className="navbar-header">

                    <Link to='/' className="navbar-brand">Holiday Helper</Link>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    {props.user
                        ? <ul className="nav navbar-nav navbar-left">
                            <li><Link>{`Hello, ${props.user.name}!`}</Link></li>
                            <li><Link to={`/account/${props.user.id}`}>My Account</Link></li>
                            <li><Link to='/#' onClick={handleLogout}>Sign Out</Link></li>
                        </ul>
                        : <ul className="nav navbar-nav navbar-left">
                            <li><Link to="/login">Log In</Link></li>
                            <li><Link to="/signup">Sign Up</Link></li>
                        </ul>
                    }

                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link to="/cart">
                                <span style={{ fontSize: '25px' }} className="glyphicon glyphicon-shopping-cart"></span>
                                <span>{props.cartQuantity}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}



const mapState = ({ cart, auth }) => ({
    cartQuantity: cart.reduce(
        (count, line) => count + line.quantity, 0),
    user: auth
})

export default connect(mapState, null)(Navbar)
