
// import './App.css'

// function App() {


//   return (

//     <>
//     <div className="form">
//       <form>
//       <input type="text" placeholder='Name'/>
//       <br />
//       <br />
//       <input type="text" placeholder='Email'/>
//       <br />
//       <br />
//       <input type="text" placeholder='Address'/>
//       <br />
//       <br />
//       <input type="password" placeholder='Password'/>
//       <br />
//       <br />
//       <button>Save</button>
//     </form>
//     </div>
//     </>

//   )
// }

// export default App











// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//   });

//   const [users, setUsers] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (user.id) {
//       // Update existing user
//       const updatedUsers = users.map((item) =>
//         item.id === user.id ? { ...user } : item
//       );
//       setUsers(updatedUsers);
//     } else {
//       // Add new user
//       setUsers([...users, { ...user, id: crypto.randomUUID() }]);
//     }

//     // Reset form
//     setUser({
//       name: "",
//       email: "",
//       phone: "",
//       password: "",
//     });
//   };

//   const handleDelete = (id) => {
//     const updatedUsers = users.filter((item) => item.id !== id);
//     setUsers(updatedUsers);
//   };

//   const handleEdit = (item) => {
//     setUser(item);
//     console.log("Editing:", item);
//   };

//   return (
//     <div className="container">
//       <h1>User Form</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={user.name}
//           onChange={handleChange}
//         /><br /><br />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={user.email}
//           onChange={handleChange}
//         /><br /><br />
//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone"
//           value={user.phone}
//           onChange={handleChange}
//         /><br /><br />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={user.password}
//           onChange={handleChange}
//         /><br /><br />
//         <button type="submit">{user.id ? "Update User" : "Add User"}</button>
//       </form>

//       <h2>User Records</h2>
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
//           {users.map((item, index) => (
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
//   );
// }

// export default App;



















import Form from "./Components/Form/Form";
import Table from "./Components/table/Table";
import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.id) {
      // Update existing user
      const updatedUsers = users.map((item) =>
        item.id === user.id ? { ...user } : item
      );
      setUsers(updatedUsers);
    } else {
      // Add new user
      setUsers([...users, { ...user, id: crypto.randomUUID() }]);
    }

    // Reset form
    setUser({
      name: "",
      email: "",
      phone: "",
      password: "",
    });
  };

  const handleDelete = (id) => {
    const updatedUsers = users.filter((item) => item.id !== id);
    setUsers(updatedUsers);
  };

  const handleEdit = (item) => {
    setUser(item);
    console.log("Editing:", item);
  };

  return (
    <div className="container">
      <h1>User Form</h1>
      

      <h2>User Records</h2>
      

      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
      <Table users={users} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
