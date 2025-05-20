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
  // const [count, setCount] = useState(0);
  // // const [name, setName] = useState('');
  // const handleIncrement = () => {
  //   setCount(count + 1);
  //   // setCount(count * 2);
  // }

  // const handleDecrement = () => {
  //   setCount(count - 1);
  //   // setCount(count % 2);
  // }



  const initialState = {
    count: 0,
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [state, setState] = useState(initialState);
  const handleIncrement = () => {
    setState({
      ...state,
      count: state.count + 1,
    });
  }
  const handleDecrement = () => {
    setState({
      ...state,
      count: state.count - 1,
    });
  }
  return (
    <div className="App">
      <h1>Count: {state.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      
    </div>
  );
}

export default App;
