import React, { useState, useMemo } from "react";
import { UserContext } from '../../Context/UserContext';

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = React.useCallback((e) => {
    e.preventDefault();

    setUsers(prevUsers => 
      user.id 
        ? prevUsers.map(item => item.id === user.id ? { ...user } : item)
        : [...prevUsers, { ...user, id: crypto.randomUUID() }]
    );

    setUser({
      name: "",
      email: "",
      phone: "",
      password: "",
    });
  }, [user]);

  const handleDelete = (id) => {
    setUsers(prev => prev.filter(item => item.id !== id));
  };

  const handleEdit = (item) => {
    setUser(item);
  };

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    user,
    users,
    handleChange,
    handleSubmit,
    handleDelete,
    handleEdit,
  }), [user, users, handleSubmit]);

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
