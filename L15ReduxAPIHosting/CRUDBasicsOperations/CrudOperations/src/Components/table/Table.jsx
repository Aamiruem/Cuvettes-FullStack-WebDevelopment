// import React from 'react';

// function Table({ users, onEdit, onDelete }) {
//     return (
//         <table className="user-table">
//             <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Phone</th>
//                     <th>Actions</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {users.map((user) => (
//                     <tr key={user.id}>
//                         <td>{user.name}</td>
//                         <td>{user.email}</td>
//                         <td>{user.phone}</td>
//                         <td>
//                             <button onClick={() => onEdit(user)}>Edit</button>
//                             <button onClick={() => onDelete(user.id)}>Delete</button>
//                         </td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     );
// }

// export default Table;




// import React from 'react'

// const Table = ({ users, handleEdit, handleDelete }) => {
//   return (
//     <div>
//       <table border="1" cellPadding="10">
//         <thead>
//           <tr>
//             <th>S.No.</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Password</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users && users.map((item, index) => (
//             <tr key={item.id}>
//               <td>{index + 1}</td>
//               <td>{item.name}</td>
//               <td>{item.email}</td>
//               <td>{item.phone}</td>
//               <td>{item.password}</td>
//               <td>
//                 <button onClick={() => handleEdit(item)}>Edit</button>
//                 <button onClick={() => handleDelete(item.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default Table




import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Table = () => {
  const { users, handleEdit, handleDelete } = useContext(UserContext);

  return (
    <div className="table-container">
      <h2>User Records</h2>
      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
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
      ) : (
        <p className="no-records">No users found</p>
      )}
    </div>
  );
};

export default Table;
