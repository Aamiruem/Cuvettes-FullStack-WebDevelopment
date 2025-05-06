// import React from 'react';
// import './App.css';
// import Counter from './Component/Counter';
// import User from './Component/User';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './Redux/Store/store.js'; // make sure this path is correct
// import Home from './Component/API';

// function App() {
//   return (
//     <Provider store={store}>
//       <BrowserRouter>
//         <div>
//           <Routes>
//             <Route path="/" element={<Counter />} />
//             <Route path="/user" element={<User />} />
//           </Routes>
//         </div>
//       </BrowserRouter>
//     </Provider>
//   );
// }

// export default App;









import React from 'react';
import './App.css';
import Counter from './Component/Counter';
import User from './Component/User';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './Component/API';

function App() {
  return (

      <BrowserRouter>
        <div>
          Api
        </div>
      </BrowserRouter>
  );
}

export default App;
