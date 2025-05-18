import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { setUser, setUsers, editUser, deleteUser } from '../../Redux/Slice/State/userSlice';

const Form = () => {
    const dispatch = useDispatch();
    const { user, users } = useSelector((state) => state.user);
    const [errors, setErrors] = useState({});

    // Validation schema
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required')
            .min(3, 'Name must be at least 3 characters'),
        email: Yup.string()
            .matches(
                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                'Invalid email format'
            )
            .email('Invalid email')
            .required('Email is required')
            .test('unique-email', 'Email already exists', (value) => {
                if (!value || user.id) return true; // Skip check if editing
                return !users.some(u => u.email === value);
            }),
        phone: Yup.string()
            .required('Phone is required')
            .matches(/^[0-9]{10}$/, 'Phone must be 10 digits'),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                'Password must contain uppercase, lowercase, number, and special character'
            )
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(setUser({ ...user, [name]: value }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await validationSchema.validate(user, { abortEarly: false });
            setErrors({});

            if (user.id) {
                // Update existing user
                dispatch(editUser(user));
            } else {
                // Add new user
                const newUser = { ...user, id: crypto.randomUUID() };
                dispatch(setUsers(newUser));
            }

            // Reset form
            dispatch(setUser({
                id: '',
                name: '',
                email: '',
                phone: '',
                password: ''
            }));

        } catch (err) {
            const validationErrors = {};
            err.inner.forEach((error) => {
                validationErrors[error.path] = error.message;
            });
            setErrors(validationErrors);
        }
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            dispatch(deleteUser(id));

            // If editing the deleted user, reset form
            if (user.id === id) {
                dispatch(setUser({
                    id: '',
                    name: '',
                    email: '',
                    phone: '',
                    password: ''
                }));
            }
        }
    };

    const handleEdit = (id) => {
        const userToEdit = users.find(user => user.id === id);
        if (userToEdit) {
            dispatch(setUser(userToEdit));
        }
    };

    return (
        <div className='form-container'>
            <h1>{user.id ? "Update User" : "Create User"}</h1>

            <form onSubmit={handleSubmit} className="user-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Enter name'
                        onChange={handleChange}
                        value={user.name}
                        className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Enter email'
                        onChange={handleChange}
                        value={user.email}
                        className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder='Enter phone number'
                        onChange={handleChange}
                        value={user.phone}
                        className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder='Enter password'
                        onChange={handleChange}
                        value={user.password}
                        className={errors.password ? 'error' : ''}
                    />
                    {errors.password && <span className="error-message">{errors.password}</span>}
                </div>

                <button type='submit' className="submit-btn">
                    {user.id ? "Update User" : "Save "}
                </button>

                {user.id && (
                    <button
                        type="button"
                        className="cancel-btn"
                        onClick={() => dispatch(setUser({
                            id: '',
                            name: '',
                            email: '',
                            phone: '',
                            password: ''
                        }))}
                    >
                        Cancel
                    </button>
                )}
            </form>

            <div className="users-list">
                <h2>Users</h2>
                {users.length === 0 ? (
                    <p>No users found</p>
                ) : (
                    <table>
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
                                            onClick={() => handleEdit(user.id)}
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
        </div>
    );
};

export default Form;
