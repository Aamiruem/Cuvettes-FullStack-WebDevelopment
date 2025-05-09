
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

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input name="name" value={user.name} onChange={handleChange} placeholder="Name" />
        <br />
        <br />
        <input name="email" value={user.email} onChange={handleChange} placeholder="Email" />
        <br />
        <br />
        <input name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" />
        <br />
        <br />
        <input name="password" value={user.password} onChange={handleChange} placeholder="Password" type="password" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name} - {u.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
