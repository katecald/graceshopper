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
import Cart from './components/Cart'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'

import {loadProducts} from 'APP/app/reducers/ProductsReducer'
import {loadProduct} from 'APP/app/reducers/ProductReducer'

const onProductsEnter = () => {
  store.dispatch(loadProducts())
}

const onProductEnter = () => {
  store.dispatch(loadProduct())
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRedirect to="/products" />
        <Route path="/products" component={Products} onEnter={onProductsEnter} />
        <Route path='/products/:id' component={Product} onEnter={onProductEnter} />
        <Route path="/cart" component={Cart} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
