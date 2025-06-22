import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




// // src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';
// import { store } from './redux/store';
// import { UserProvider } from './context/UserContext';
// import './styles/global.css';

// // Create root first
// const rootElement = document.getElementById('root');
// const root = ReactDOM.createRoot(rootElement);

// // Then render your app
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <UserProvider>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </UserProvider>
//     </Provider>
//   </React.StrictMode>
// );
