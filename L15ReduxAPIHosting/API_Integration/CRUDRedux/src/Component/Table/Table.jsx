import React, { useContext } from 'react'; // Correct import
import { UserContext } from '../../Context/UserContextProvider'; // Correct path

const Table = () => {
    const { users, handleEdit, handleDelete } = useContext(UserContext);

    return (
        <div className='table'>
            <h1>Records</h1>
            <table>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((item, index) => (
                        <tr key={index}> {/* Use index as key if item.id is not defined */}
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.password}</td>
                            <td>
                                <button onClick={() => handleEdit(item, index)}>Edit</button>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
