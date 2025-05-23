// src/contexts/TodoContext.js
import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');

    const addTodo = (text) => {
        if (text.trim()) {
            setTodos([...todos, { id: Date.now(), text }]);
        }
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const startEditing = (id, text) => {
        setEditingId(id);
        setEditText(text);
    };

    const cancelEditing = () => {
        setEditingId(null);
        setEditText('');
    };

    const saveEdit = (id) => {
        if (editText.trim()) {
            setTodos(todos.map(todo =>
                todo.id === id ? { ...todo, text: editText } : todo
            ));
            cancelEditing();
        }
    };

    return (
        <TodoContext.Provider
            value={{
                todos,
                editingId,
                editText,
                setEditText,
                addTodo,
                removeTodo,
                startEditing,
                cancelEditing,
                saveEdit
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
