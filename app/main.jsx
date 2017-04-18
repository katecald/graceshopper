'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Products from './components/Products'
import Product from './components/Product'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'

import {loadProducts} from 'APP/app/reducers/ProductsReducer'
import {loadProduct} from 'APP/app/reducers/ProductReducer'

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

const onProductEnter = () => {
  // store.dispatch(setProduct())
  store.dispatch(loadProduct())
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" >
        <IndexRedirect to="/products" />
        <Route path="/products" component={Products} onEnter={onProductsEnter} />
        <Route path='/products/:id' component={Product} onEnter={onProductEnter} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
