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





import React, { createContext } from 'react';
import GrandChild from './Components/GrandChild';
// import Parent from './Components/Parent';
// import Child from './Components/Child';
import './App.css'; // Import the CSS file

export const DataContext = createContext();

function App() {
  const employeeData = [
    { id: 1, name: "kamran", age: 23 },
    { id: 2, name: "Aamir", age: 34 },
    { id: 3, name: "Ali", age: 30 },
    { id: 4, name: "Tariq", age: 45 },
    { id: 5, name: "John Doe", age: 30 },
    { id: 6, name: "Jane Smith", age: 25 },
    { id: 7, name: "Alice Johnson", age: 28 },
    { id: 8, name: "Bob Brown", age: 35 }
  ];

  return (
    <DataContext.Provider value={employeeData}>
      <div className="app-container">
        <h1>Employee Directory</h1>
        <GrandChild />
        {/* <Parent />
        <Child/> */}
        <div className="footer">
          <p>Powered by React Context API</p>
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
