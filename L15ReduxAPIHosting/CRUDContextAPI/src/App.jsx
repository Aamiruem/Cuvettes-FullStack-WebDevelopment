import React, { useState } from "react";
import Form from "./Components/form/Form.jsx";
import Table from "./Components/table/Table.jsx";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    id: null,
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.id) {
      // Update existing user
      const updatedUsers = users.map((u) =>
        u.id === user.id ? user : u
      );
      setUsers(updatedUsers);
    } else {
      // Create new user
      setUsers([
        ...users,
        { ...user, id: crypto.randomUUID() },
      ]);
    }

    // Reset form
    setUser({
      id: null,
      name: "",
      email: "",
      phone: "",
      password: "",
    });
  };

  const handleEdit = (id) => {
    const selectedUser = users.find((u) => u.id === id);
    setUser(selectedUser);
  };

  const handleDelete = (id) => {
    const filteredUsers = users.filter((u) => u.id !== id);
    setUsers(filteredUsers);
  };

  return (
    <div className="container">
      <h1>User Management</h1>
      <form onSubmit={handleSubmit}>
        <Form user={user} handleChange={handleChange} />
      </form>
      <Table users={users} onEdit={handleEdit} onDelete={handleDelete} />

      <Form />
      <Table />
    </div>
  );
};

export default App;
