import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import { Link } from 'react-router'
import App from '../App'

class Container extends Component {
  static propTypes = {};

  render() {
    return (
      <Provider store = {store}>
        <App/>
      </Provider>
    )
  }
}

export default Container