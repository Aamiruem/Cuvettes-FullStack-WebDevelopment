// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './Redux/Store/store';
// import Counter from './Component/Counter';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <Counter />
//     </Provider>
//   );
// };

// export default App;



import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux/Store/store';
import Counter from './Component/Counter';
import './App.css';
import './index.css'
function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
