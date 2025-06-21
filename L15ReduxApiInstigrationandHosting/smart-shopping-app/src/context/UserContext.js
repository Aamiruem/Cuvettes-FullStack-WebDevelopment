// import { UserProvider } from './context/UserContext';


import { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        address: '123 Main St',
    });

    const updateUser = (newUser) => {
        setUser(prev => ({ ...prev, ...newUser }));
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;


// import React, { createContext, useState } from 'react';

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     return (
//         <UserContext.Provider value={{ user, setUser }}>
//             {children}
//         </UserContext.Provider>
//     );
// };
// export default UserProvider;
