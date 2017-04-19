import React from 'react'

const Navbar = ({ user, logout }) => (
    <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">

            <div className="navbar-header">

                <a className="navbar-brand" href="#">Holiday Helper</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-left">
                    <li className="active"><a href="#">Log In <span className="sr-only">(current)</span></a></li>
                    <li><a href="#">Sign Up</a></li>
                </ul>

                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#"><span className="glyphicon glyphicon-shopping-cart"></span></a></li>
                </ul>
                <button>Add To Cart</button>
            </div>
        </div>
    </nav>
)

export default Navbar
