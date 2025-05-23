
// src/App.js

import './App.css';
import React from 'react';
import { TodoProvider } from './Contexts/TodoContext';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import TodoItem from './Components/TodoItem';


const App = () => {
  return (
    <TodoProvider>
      <div className="app">
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
        <TodoItem />
      </div>
    </TodoProvider>
  );
};

export default App;
