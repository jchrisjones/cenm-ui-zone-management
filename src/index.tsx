// Packages imports
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import configureStore from './configureStore'

import './index.scss'

// Component imports
import App from './App'

// Config imports
import * as serviceWorker from './serviceWorker'

const history = createBrowserHistory()
const initialState = window.INITIAL_REDUX_STATE
const store = configureStore(history, initialState)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
)

serviceWorker.unregister()
