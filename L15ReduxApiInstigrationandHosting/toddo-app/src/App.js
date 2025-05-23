
import './App.css';

// src/App.js
import React from 'react';
import { TodoProvider } from './Contexts/TodoContext';
import TodoForm from './Components/ToddoForm';
import TodoList from './Components/ToddoList';

import ToddoItem from './Components/ToddoItem';


const App = () => {
  return (
    <TodoProvider>
      <div className="app">
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
        <ToddoItem />
      </div>
    </TodoProvider>
  );
};

export default App;
