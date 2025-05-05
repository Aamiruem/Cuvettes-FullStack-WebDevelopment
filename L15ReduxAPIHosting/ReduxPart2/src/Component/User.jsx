// import React from 'react'
// import { useSelector } from 'react-redux';

// const User = () => {
//     const count = useSelector((state) => {
//         return state.counter.count;
//     });
//     // const loading = useSelector((state) => {
//     //     return state.counter.loading;
//     // });
    
//     return (
//         <div>

//             <h1>{count}</h1>
//             User

//             <form >
//                 <input type="text" placeholder='Enter your name' />
//                 <input type="text" placeholder='Enter your email' />
//                 <input type="text" placeholder='Enter your password' />
//                 <button>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default User






import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../Redux/Slices/userSlice'; // <-- You need to create this slice

const User = () => {
    const [user, setUserState] = useState({
        name: '',
        email: '',
        password: '',
    });

    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserState((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted!', user);
        dispatch(setUser(user)); // Dispatch user data to Redux store
        setUserState({ name: '', email: '', password: '' }); // ✅ Reset form
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <h2>User Form</h2>

            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your name"
                />

                <input
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter your email"
                />

                <input
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    type="password"
                    placeholder="Enter your password"
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default User;
