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







// import {useState} from 'react';
// import './App.css';

// function App() {
//   // const [count, setCount] = useState(0);
//   // // const [name, setName] = useState('');
//   // const handleIncrement = () => {
//   //   setCount(count + 1);
//   //   // setCount(count * 2);
//   // }

//   // const handleDecrement = () => {
//   //   setCount(count - 1);
//   //   // setCount(count % 2);
//   // }



//   const initialState = {
//     count: 0,
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   };
//   const [state, setState] = useState(initialState);
//   const handleIncrement = () => {
//     setState({
//       ...state,
//       count: state.count + 1,
//     });
//   }
//   const handleDecrement = () => {
//     setState({
//       ...state,
//       count: state.count - 1,
//     });
//   }
//   return (
//     <div className="App">
//       <h1>Count: {state.count}</h1>
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>

//     </div>
//   );
// }

// export default App;










// import React, { useReducer, useState } from 'react';
import React, { useReducer } from 'react';
import './App.css';

function App() {
  // const [toggle, setToggle] = useState(true);

  const initialState = {
    count: 0,
    toggle: true,
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { ...state, count: state.count + 1 };
      case 'decrement':
        return { ...state, count: state.count - 1 };
      case 'toggle':
        return { ...state, toggle: !state.toggle };
      
      case "Data":
        return {data:state.data = "Test"}
      
      case "name":
        return { ...state, name: action.payload };
      
      case "email":
        return { ...state, email: action.payload };
      case "password":
        return { ...state, password: action.payload };
      case "confirmPassword":
        return { ...state, confirmPassword: action.payload };
      
      
      
      case "data":
        return { ...state, name: action.payload.name, email: action.payload.email, password: action.payload.password, confirmPassword: action.payload.confirmPassword };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const handleIncrement = () => {
    dispatch({ type: 'increment' });
  }
  const handleDecrement = () => {
    dispatch({ type: 'decrement' });
  }
  console.log(state.count);
  console.log(state.toggle);
  return (
    <div className="App">
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>

      <br />
      <br />
      <br />
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={() => dispatch({ type: 'toggle' })}>Toggle</button>
      <h1>Toggle: {state.toggle ? 'true' : 'false'}</h1>

      <h1>{state.data}</h1>
      <button onClick={() => dispatch({ type: 'Data' })}>Get Data</button>

      

      <br />
      <h1>Name: {state.name}</h1>
      <h1>Email: {state.email}</h1>
      <h1>Password: {state.password}</h1>
      <h1>Confirm Password: {state.confirmPassword}</h1>

      
      <br />
      <br />
      <form onSubmit={(e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  dispatch({
    type: 'data',
    payload: {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword')
    }
  });
}}>
        <input name="name" placeholder="Name" />
        <br />
        <br />
        <input name="email" placeholder="Email" />
        <br />
        <br />
        <input name="password" type="password" placeholder="Password" />
        <br />
        <br />
        <input name="confirmPassword" type="password" placeholder="Confirm Password" />
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
</form>

    </div>
  );
}

export default App;
