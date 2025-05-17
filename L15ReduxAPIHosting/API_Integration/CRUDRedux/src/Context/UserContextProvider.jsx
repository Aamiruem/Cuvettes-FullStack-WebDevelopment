import { createContext, useState } from "react";

// Create and export the context
export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  // User input state
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  // Users list state
  const [users, setUsers] = useState([]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, user]);
    setUser({ name: "", email: "", phone: "", password: "" });
  };

  // Handle user deletion
  const handleDelete = (id) => {
    setUsers(users.filter((_, index) => index !== id));
  };

  // Handle user edit (fill form with selected user)
  const handleEdit = (item, index) => {
    setUser(item);
    handleDelete(index);
  };

  return (
    <UserContext.Provider
      value={{ user, users, handleChange, handleSubmit, handleDelete, handleEdit }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

