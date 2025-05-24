
// // src/App.js

// import './App.css';
// import React from 'react';
// import { TodoProvider } from './Contexts/TodoContext';
// import TodoForm from './Components/TodoForm';
// import TodoList from './Components/TodoList';
// import TodoItem from './Components/TodoItem';


// const App = () => {
//   return (
//     <TodoProvider>
//       <div className="app">
//         <h1>Todo List</h1>
//         <TodoForm />
//         <TodoList />
//         <TodoItem />
//       </div>
//     </TodoProvider>
//   );
// };

// export default App;







import React from 'react';
import { TodoProvider } from './contexts/TodoContext';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  return (
    <TodoProvider>
      <div className="app">
        <h1>Todo List with Context API</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
