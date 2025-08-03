// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );





// // index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';
// import WorkoutContext from './Context/WorkoutContext';
// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//       <WorkoutContext>
//       </WorkoutContext>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>




// );




// // index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';
// import WorkoutContext from './Context/WorkoutContext'; // Make sure this is a context *provider*
// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <WorkoutContext>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </WorkoutContext>
//   </React.StrictMode>
// );









// // index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';
// import WorkoutContext from './Context/WorkoutContext';
// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <WorkoutContext>
//         <App />
//       <BrowserRouter>
//       </BrowserRouter>
//     </WorkoutContext>
//   </React.StrictMode>
// );





// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import App from './App';
import WorkoutContext from './Context/WorkoutContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <WorkoutContext>
    <App />
  </WorkoutContext>

);
