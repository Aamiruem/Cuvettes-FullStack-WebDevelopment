// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )




import { UserProvider } from './Context/UserContext';

// Wrap your app with the provider
<React.StrictMode>
  <UserProvider>
    <App />
  </UserProvider>
</React.StrictMode>
