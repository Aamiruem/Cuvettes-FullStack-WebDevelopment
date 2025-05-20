// import {useState} from 'react';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   );
// }

// export default App;







import {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  // const [name, setName] = useState('');
  const handleIncrement = () => {
    setCount(count + 1);
    // setCount(count * 2);
  }

  const handleDecrement = () => {
    setCount(count - 1);
    setCount(count % 2);
  }
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      
    </div>
  );
}

export default App;
