import React from 'react'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist-immutable'

import configureStore from './configs/StoreConfig'
import AppRouter from './routes' 

const initialState = {}

const store = configureStore(initialState)
persistStore(store)

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <div>
          <AppRouter /> 
        </div>
      </Provider>
    )
  }
}

export default App
