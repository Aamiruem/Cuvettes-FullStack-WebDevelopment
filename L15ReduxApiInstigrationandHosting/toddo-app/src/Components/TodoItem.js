// // src/components/TodoItem.js
// import React, { useContext } from 'react';
// import { TodoContext } from '../Contexts/TodoContext';

// const TodoItem = ({ todo }) => {
//     const {
//         editingId,
//         editText,
//         setEditText,
//         removeTodo,
//         startEditing,
//         cancelEditing,
//         saveEdit
//     } = useContext(TodoContext);

//     return (
//         <li>
//             {editingId === todo.id ? (
//                 <>
//                     <input
//                         type="text"
//                         value={editText}
//                         onChange={(e) => setEditText(e.target.value)}
//                     />
//                     <button onClick={() => saveEdit(todo.id)}>Save</button>
//                     <button onClick={cancelEditing}>Cancel</button>
//                 </>
//             ) : (
//                 <>
//                     <span>{todo.text}</span>
//                     <button onClick={() => startEditing(todo.id, todo.text)}>Edit</button>
//                     <button onClick={() => removeTodo(todo.id)}>Delete</button>
//                 </>
//             )}
//         </li>
//     );
// };

// export default TodoItem;







// import TodoItem from './TodoItem';

// function ToddoList({ todos }) {
//   return (
//     <ul>
//       {todos.map((todo) => (
//         <TodoItem key={todo.id} task={todo} />
//       ))}
//     </ul>
//   );
// }

// export default ToddoList;











import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

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
        <li className="todo-item">
            {editingId === todo.id ? (
                <div className="edit-form">
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="edit-input"
                    />
                    <button onClick={() => saveEdit(todo.id)} className="save-btn">
                        Save
                    </button>
                    <button onClick={cancelEditing} className="cancel-btn">
                        Cancel
                    </button>
                </div>
            ) : (
                <div className="todo-content">
                    <span>{todo.text}</span>
                    <div className="todo-actions">
                        <button
                            onClick={() => startEditing(todo.id, todo.text)}
                            className="edit-btn"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => removeTodo(todo.id)}
                            className="delete-btn"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </li>
    );
};

export default TodoItem;
