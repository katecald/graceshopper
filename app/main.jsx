'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import AppContainer from './components/AppContainer'
import Products from './components/Products'
import Navbar from './components/Navbar'
import Checkout from './components/Checkout'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'

import {loadProducts} from 'APP/app/reducers/ProductsReducer'

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>
)

const onProductsEnter = () => {
  store.dispatch(loadProducts())
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRedirect to="/products" />
        <Route path="/products" component={Products} onEnter={onProductsEnter} />
        <Route path="/checkout" component={Checkout} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
