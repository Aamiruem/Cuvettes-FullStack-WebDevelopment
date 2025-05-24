import './App.css';
import Parent from './Components/Parent';

function App() {
  return (
    <>
      <h1>Context API</h1>
      <Parent data="My Data" />
    </>
  );
}

export default App;



// import { createContext } from 'react';
// import './App.css';
// import Parent from './Components/Parent';

// export const Data = createContext();

// function App() {
//   const EmpData = [
//     { name: "kamran", age: 23 },
//     { name: "Aamir", age: 34 },
//     { name: "Ali", age: 30 },
//     { name: "Tariq", age: 45 }
//   ];

//   return (
//     <>
//       <Data.Provider value={EmpData}>
//         <h1>Context API</h1>
//         <Parent />
//       </Data.Provider>
//     </>
//   );
// }

// export default App;
