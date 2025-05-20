// import { createContext, useState, useContext } from 'react';

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//     const [user, setUser] = useState({
//         name: 'Guest',
//         email: '',
//         address: '',
//         isLoggedIn: false
//     });

//     const login = (userData) => {
//         setUser({
//             ...userData,
//             isLoggedIn: true
//         });
//     };

//     const logout = () => {
//         setUser({
//             name: 'Guest',
//             email: '',
//             address: '',
//             isLoggedIn: false
//         });
//     };

//     const updateProfile = (updatedData) => {
//         setUser(prev => ({
//             ...prev,
//             ...updatedData
//         }));
//     };

//     return (
//         <UserContext.Provider value={{ user, login, logout, updateProfile }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

// export const useUser = () => {
//     const context = useContext(UserContext);
//     if (!context) {
//         throw new Error('useUser must be used within a UserProvider');
//     }
//     return context;
// };




// import { UserProvider, useUser } from './Context/UserContext.jsx';

import { useContext, useState } from 'react';
import UserContext from './UserContextObject';

// 2. Provider component
export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: 'Guest',
    email: '',
    address: '',
    isLoggedIn: false
  });

  const login = (userData) => {
    setUser({
      ...userData,
      isLoggedIn: true
    });
  };

  const logout = () => {
    setUser({
      name: 'Guest',
      email: '',
      address: '',
      isLoggedIn: false
    });
  };

  const updateProfile = (updatedData) => {
    setUser(prev => ({
      ...prev,
      ...updatedData
    }));
  };

  return (
    <UserContext.Provider value={{ user, login, logout, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
}

// 3. Custom hook
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
