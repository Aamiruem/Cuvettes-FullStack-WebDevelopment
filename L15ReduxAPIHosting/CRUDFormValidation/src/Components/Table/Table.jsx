import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, deleteUser } from '../../Redux/Slice/State/userSlice';
import './Table.css';

const Table = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.user);

    const handleEdit = (user) => {
        dispatch(setUser(user));
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            dispatch(deleteUser(id));
        }
    };

    return (
        <div className="table-container">
            <h2>User Records</h2>
            {users.length === 0 ? (
                <p className="no-records">No users found</p>
            ) : (
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td className="actions">
                                    <button 
                                        onClick={() => handleEdit(user)}
                                        className="edit-btn"
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(user.id)}
                                        className="delete-btn"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Table;
