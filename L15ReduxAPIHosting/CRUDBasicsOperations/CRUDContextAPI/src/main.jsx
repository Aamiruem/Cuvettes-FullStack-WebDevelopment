
import './index.css'
import App from './App.jsx'
import React from 'react'

import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { store } from './Redux/Store/store.js'
// import { BrowserRouter } from 'react-router-dom'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <BrowserRouter> */}
        <App />
      {/* </BrowserRouter> */}
    </Provider>
  </React.StrictMode>,
)








