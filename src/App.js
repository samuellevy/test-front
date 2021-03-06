import './assets/scss/main.scss'

import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import MainScene from './scenes/MainScene'
import Cart from './scenes/Checkout/pages/Cart'
import Payment from './scenes/Checkout/pages/Payment'
import Conclusion from './scenes/Checkout/pages/Conclusion'

import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" component={MainScene} />
          <Route path="/cart" component={Cart} />
          <Route path="/payment" component={Payment} />
          <Route path="/conclusion" component={Conclusion} />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
