import 'react-hot-loader/patch'
import 'babel-polyfill'

import App from '~/components/App'
import { basename } from 'config'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ServerStateProvider } from 'react-router-server'
import configureStore from 'store/configure'

const serverState = window.__SERVER_STATE__
const initialState = window.__INITIAL_STATE__

const store = configureStore(initialState)

const renderApp = () => (
  <ServerStateProvider state={serverState}>
    <Provider store={store}>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </Provider>
  </ServerStateProvider>
)

const root = document.getElementById('app')
render(renderApp(), root)

if (module.hot) {
  module.hot.accept('~/components/App', () => {
    require('~/components/App')
    render(renderApp(), root)
  })
}
