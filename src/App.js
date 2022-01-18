import './App.css';

import React, { PureComponent } from 'react'
import Category from './components/Category';
import Product from './components/Product,';
import Cart from './components/Cart';
import { Provider } from "react-redux"
import { createStore } from "redux"
import allReducers from "./reducers"

let store = createStore(allReducers)

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Category />
          <Product />
          <Cart />
      </div>
      </Provider>
    )
  }
}
