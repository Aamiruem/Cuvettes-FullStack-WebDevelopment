// src/components/TodoItem.js
import React, { useContext } from 'react';
import { TodoContext } from '../Contexts/TodoContext';

const TodoItem = ({ todo }) => {
  const {
    editingId,
    editText,
    setEditText,
    removeTodo,
    startEditing,
    cancelEditing,
    saveEdit
  } = useContext(TodoContext);

  return (
    <li>
      {editingId === todo.id ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={() => saveEdit(todo.id)}>Save</button>
          <button onClick={cancelEditing}>Cancel</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => startEditing(todo.id, todo.text)}>Edit</button>
          <button onClick={() => removeTodo(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
