
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





import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Table from "./Components/Table";


function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.id) {
      // update existing user
      const updatedUsers = users.map((item) =>
        item.id === user.id ? { ...user } : item
      );
      setUsers(updatedUsers);
    } else {
      // add new user
      setUsers([
        ...users,
        { ...user, id: crypto.randomUUID() }
      ]);
    }

    // clear form
    setUser({
      name: "",
      email: "",
      phone: "",
      password: ""
    });
  };

  const handleEdit = (userToEdit) => {
    setUser(userToEdit);
  };

  const handleDelete = (idToDelete) => {
    const filteredUsers = users.filter((user) => user.id !== idToDelete);
    setUsers(filteredUsers);
  };

  return (
    <div className="Container">
      <Form
        user={user}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Table users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
