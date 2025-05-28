// import React, { useState } from 'react';
// import {useSelector} from "react-redux";
// import { useDispatch } from "react-redux";

// const User = () => {
//     const data = useSelector(state => state.user.user);
//     console.log("User data from Redux store:", data);
//     const dispatch = useDispatch();

//     const [user, setUser] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         username: '',
//         password: '',
//         confirmPassword: '',
//         age: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUser(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Form submitted:", user);
//         dispatch({ type: 'SET_USER', payload: user });
//         setMainUser({
//             name: '',
//             email: '',
//             phone: '',
//             username: '',
//             password: '',
//             confirmPassword: '',
//             age: ''
//         });
//     };

//     return (
//         <div className='user'>
//             <h1>User</h1>

//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Enter your name"
//                     name="name"
//                     value={user.name}
//                     onChange={handleChange}
//                 />
//                 <br /><br />

//                 <input
//                     type="text"
//                     placeholder="Enter your username"
//                     name="username"
//                     value={user.username}
//                     onChange={handleChange}
//                 />
//                 <br /><br />

//                 <input
//                     type="email"
//                     placeholder="Enter your email"
//                     name="email"
//                     value={user.email}
//                     onChange={handleChange}
//                 />
//                 <br /><br />

//                 <input
//                     type="password"
//                     placeholder="Enter your password"
//                     name="password"
//                     value={user.password}
//                     onChange={handleChange}
//                 />
//                 <br /><br />

//                 <input
//                     type="password"
//                     placeholder="Confirm your password"
//                     name="confirmPassword"
//                     value={user.confirmPassword}
//                     onChange={handleChange}
//                 />
//                 <br /><br />

//                 <input
//                     type="tel"
//                     placeholder="Enter your phone number"
//                     name="phone"
//                     value={user.phone}
//                     onChange={handleChange}
//                 />
//                 <br /><br />

//                 <input
//                     type="number"
//                     placeholder="Enter your age"
//                     name="age"
//                     value={user.age}
//                     onChange={handleChange}
//                 />
//                 <br /><br />

//                 <button onClick={handleSubmit} className='btn' type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default User;











// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setMainUser, setUsers, setIsActive } from '../Redux/Slices/userSlice';



// const User = () => {
//     const users = useSelector(state => state.user.users);
//     console.log("User data from Redux store:", users);
//     const dispatch = useDispatch();
//     const isActive = useSelector(state => state.user.isActive);
//     console.log("Is user active:", isActive);

//     const [user, setUser] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         username: '',
//         password: '',
//         confirmPassword: '',
//         age: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUser(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Form submitted:", user);

//         dispatch({ type: 'SET_USER', payload: user });

//         // Reset form
//         setUser({
//             name: '',
//             email: '',
//             phone: '',
//             username: '',
//             password: '',
//             confirmPassword: '',
//             age: ''
//         });


//         dispatch(setMainUser(user));
//         dispatch(setUsers(user));
//         console.log("User data set in Redux store:", user);
//         dispatch(setIsActive(true));
//         console.log("User is active:", true);

//     };

//     return (
//         <div className='user'>
//             <h1>User</h1>
//             <h1>Data Submitted</h1>

//             {
//                 isActive ? <h2>User is active</h2> : <p>User is not active</p>
//             }

//             <form onSubmit={handleSubmit}>
//                 <input type="text"
//                     placeholder="Enter your name"
//                     name="name"
//                     value={user.name}
//                     onChange={handleChange} />
//                 <br /><br />

//                 <input type="text"
//                     placeholder="Enter your username"
//                     name="username"
//                     value={user.username}
//                     onChange={handleChange} />
//                 <br /><br />

//                 <input
//                     type="email"
//                     placeholder="Enter your email"
//                     name="email"
//                     value={user.email}
//                     onChange={handleChange}
//                     autoComplete="email"
//                 />

//                 <br /><br />

//                 <input
//                     type="password"
//                     placeholder="Enter your password"
//                     name="password"
//                     value={user.password}
//                     onChange={handleChange}
//                     autoComplete="new-password"
//                 />

//                 <br /><br />
//                 <input
//                     type="password"
//                     placeholder="Confirm your password"
//                     name="confirmPassword"
//                     value={user.confirmPassword}
//                     onChange={handleChange}
//                     autoComplete="new-password"
//                 />

//                 <br /><br />

//                 <input type="tel"
//                     placeholder="Enter your phone number"
//                     name="phone"
//                     value={user.phone}
//                     onChange={handleChange} />
//                 <br /><br />

//                 <input type="number"
//                     placeholder="Enter your age" name="age"
//                     value={user.age}
//                     onChange={handleChange} />
//                 <br /><br />

//                 <button onClick={handleSubmit}
//                     type="submit"
//                     className='btn'>Submit</button>
//             </form>
//         </div>
//     );
// };

// export default User;







import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMainUser, setUsers, setIsActive } from '../Redux/Slices/userSlice';

const User = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.user.users);
    const isActive = useSelector(state => state.user.isActive);

    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        confirmPassword: '',
        age: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", user);

        dispatch(setMainUser(user));
        dispatch(setUsers(user));
        dispatch(setIsActive(true));

        console.log("User data set in Redux store:", user);
        console.log("User is active:", true);

        // Reset form
        setUser({
            name: '',
            email: '',
            phone: '',
            username: '',
            password: '',
            confirmPassword: '',
            age: ''
        });
    };

    return (
        <div className='user'>
            <h1>User</h1>
            <h2>Data Submitted</h2>

            {isActive ? <h2>User is active</h2> : <p>User is not active</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                /><br /><br />

                <input
                    type="text"
                    placeholder="Enter your username"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                /><br /><br />

                <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    autoComplete="email"
                /><br /><br />

                <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    autoComplete="new-password"
                /><br /><br />

                <input
                    type="password"
                    placeholder="Confirm your password"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={handleChange}
                    autoComplete="new-password"
                /><br /><br />

                <input
                    type="tel"
                    placeholder="Enter your phone number"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                /><br /><br />

                <input
                    type="number"
                    placeholder="Enter your age"
                    name="age"
                    value={user.age}
                    onChange={handleChange}
                /><br /><br />

                <button type="submit" className='btn'>Submit</button>
            </form>
        </div>
    );
};

export default User;
