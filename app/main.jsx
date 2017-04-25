'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import AppContainer from './components/AppContainer'
import Products from './components/Products'
import Product from './components/Product'
import Navbar from './components/Navbar'
import Checkout from './components/Checkout'
import Cart from './components/Cart'
import OrderHistory from './components/OrderHistory'
import Login from './components/Login'
import SignUp from './components/SignUp'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'

import {loadProducts} from 'APP/app/reducers/ProductsReducer'
import {loadProduct} from 'APP/app/reducers/ProductReducer'
import {getCart} from 'APP/app/reducers/CartReducer'
import {loadAccount} from 'APP/app/reducers/AccountReducer'
import {whoami} from 'APP/app/reducers/auth'

const onProductsEnter = () => {
  store.dispatch(loadProducts())
}

const onProductEnter = (nextState) => {
  store.dispatch(loadProduct(nextState.params.id))
}

const onCartEnter = () => {
  store.dispatch(getCart())
}

const onAccountEnter = (nextState) => {
  store.dispatch(loadAccount(nextState.params.id))
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRedirect to="/products" />
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/checkout" component={Checkout} />
        <Route path='/products/:id' component={Product} onEnter={onProductEnter} />
        <Route path="/products" component={Products} onEnter={onProductsEnter} />
        <Route path="/cart" component={Cart} onEnter={onCartEnter} />
        <Route path="/account/:id" component={OrderHistory} onEnter={onAccountEnter} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
