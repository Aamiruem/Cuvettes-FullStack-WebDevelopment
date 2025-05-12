// import React, { useState, useMemo } from "react";
// import { UserContext } from '../../Context/UserContext';

// const UserContextProvider = ({ children }) => {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//   });

//   const [users, setUsers] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = React.useCallback((e) => {
//     e.preventDefault();

//     setUsers(prevUsers =>
//       user.id
//         ? prevUsers.map(item => item.id === user.id ? { ...user } : item)
//         : [...prevUsers, { ...user, id: crypto.randomUUID() }]
//     );

//     setUser({
//       name: "",
//       email: "",
//       phone: "",
//       password: "",
//     });
//   }, [user]);

//   const handleDelete = (id) => {
//     setUsers(prev => prev.filter(item => item.id !== id));
//   };

//   const handleEdit = (item) => {
//     setUser(item);
//   };

//   // Memoize the context value to prevent unnecessary re-renders
//   const contextValue = useMemo(() => ({
//     user,
//     users,
//     handleChange,
//     handleSubmit,
//     handleDelete,
//     handleEdit,
//   }), [user, users, handleSubmit]);

//   return (
//     <UserContext.Provider value={contextValue}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserContextProvider;






// import React, { createContext, useState } from "react";

// export const UserContext = createContext();

// const UserContextProvider = ({ children }) => {
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
//       const updatedUsers = users.map((item) =>
//         item.id === user.id ? { ...user } : item
//       );
//       setUsers(updatedUsers);
//     } else {
//       setUsers([...users, { ...user, id: crypto.randomUUID() }]);
//     }
//     setUser({ name: "", email: "", phone: "", password: "" });
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
//     <UserContext.Provider
//       value={{
//         user,
//         users,
//         handleChange,
//         handleSubmit,
//         handleDelete,
//         handleEdit,
//       }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserContextProvider;





import React, { createContext, useState } from "react";

// ✅ Create context with a distinct name
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.id) {
      setUsers(prev => prev.map(item => 
        item.id === user.id ? { ...user } : item
      ));
    } else {
      setUsers(prev => [...prev, { ...user, id: crypto.randomUUID() }]);
    }
    setUser({ name: "", email: "", phone: "", password: "" });
  };

  const handleDelete = (id) => {
    setUsers(prev => prev.filter(item => item.id !== id));
  };

  const handleEdit = (userToEdit) => {
    setUser(userToEdit);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        users,
        handleChange,
        handleSubmit,
        handleDelete,
        handleEdit
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
