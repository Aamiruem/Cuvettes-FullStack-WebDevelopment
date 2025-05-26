
import React from 'react'
import { useState } from 'react'
import './App.css'
import { createRoot } from 'react-dom/client'

import { Provider } from 'react-redux'
import Counter from './Component/Counter'
import { store } from './Redux/Store/store.js'
import User from './Component/User'

function App() {

  return (
    <Provider store={store}>
      <div>
        <Counter />
        <User />
      </div>
    </Provider>
  )
}
export default App
