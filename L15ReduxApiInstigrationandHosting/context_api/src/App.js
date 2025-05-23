// import './App.css';
// import Parent from './Components/Parent';

// function App() {
//   return (
//     <>
//       <h1>Context API</h1>
//       <Parent data="My Data" />
//     </>
//   );
// }

// export default App;



import {createContext} from 'react';
import './App.css';
import Parent from './Components/Parent';
export const Data = createContext();

function App() {
  return (
    <>
      <Data.Provider value={"This is My Data"}>
        <h1>Context API</h1>
        <Parent/>
      </Data.Provider>
    </>
  );
}

export default App;
