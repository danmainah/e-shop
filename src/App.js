import './App.css';

import React, { PureComponent } from 'react'
import Category from './components/Category';
import Product from './components/Product,';
import Cart from './components/Cart';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Category />
        <Product />
        <Cart />
      </div>
    )
  }
}
