// // src/components/TodoForm.js
// import React, { useState, useContext } from 'react';
// import { TodoContext } from '../Contexts/TodoContext';

// const TodoForm = () => {
//     const [text, setText] = useState('');
//     const { addTodo } = useContext(TodoContext);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         addTodo(text);
//         setText('');
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//                 placeholder="Add a new todo..."
//             />
//             <button type="submit">Add</button>
//         </form>
//     );
// };

// export default TodoForm;








import React, { useState, useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoForm = () => {
    const [text, setText] = useState('');
    const { addTodo } = useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new todo..."
                className="todo-input"
            />
            <button type="submit" className="add-btn">
                Add Todo
            </button>
        </form>
    );
};

export default TodoForm;
