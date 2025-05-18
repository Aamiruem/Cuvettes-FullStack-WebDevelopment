
// import React from 'react';
// import './App.css';
// import Counter from './Component/Counter';
// import User from './Component/User';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import API from './Component/API'; // ✅ Corrected import name

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <API />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;





import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/Store/store';
import API from './Component/API';
import Counter from './Component/Counter';
import User from './Component/User';
import Form from './Component/Form'; // Add your Form component

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<API />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users" element={<User />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
