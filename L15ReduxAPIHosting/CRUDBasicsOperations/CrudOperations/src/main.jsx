import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContextProvider from './Components/Context/UserContextProvider.jsx'

ReactDOM(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
    <App />
    </UserContextProvider>
  </React.StrictMode>,
)
