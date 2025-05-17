// import React from 'react';

// function Form({ user, handleChange, handleSubmit }) {
//     return (
//         <form onSubmit={handleSubmit} className="form-container">
//             <div className="form-group">
//                 <label>Name</label>
//                 <input
//                     type="text"
//                     name="name"
//                     value={user.name}
//                     onChange={handleChange}
//                 />
//             </div>
//             <div className="form-group">
//                 <label>Email</label>
//                 <input
//                     type="email"
//                     name="email"
//                     value={user.email}
//                     onChange={handleChange}
//                 />
//             </div>
//             <div className="form-group">
//                 <label>Phone</label>
//                 <input
//                     type="text"
//                     name="phone"
//                     value={user.phone}
//                     onChange={handleChange}
//                 />
//             </div>
//             <div className="form-group">
//                 <label>Password</label>
//                 <input
//                     type="password"
//                     name="password"
//                     value={user.password}
//                     onChange={handleChange}
//                 />
//             </div>
//             <button type="submit" className="submit-btn">
//                 {user.id ? 'Update' : 'Submit'}
//             </button>
//         </form>
//     );
// }

// export default Form;





// import { UserContext } from "../../Context/UserContextProvider";


// import React, { useState } from 'react';

// const Form = () => {
//     // const {} = UserContext(UserContext)
//     const [user, setUser] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         password: '',
//         id: null,
//     });

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setUser((prevUser) => ({
//             ...prevUser,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log("Form submitted", user);
//     };

//     return (
//         <div>

//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Name"
//                     value={user.name}
//                     onChange={handleChange}
//                 /><br /><br />
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={user.email}
//                     onChange={handleChange}
//                 /><br /><br />
//                 <input
//                     type="text"
//                     name="phone"
//                     placeholder="Phone"
//                     value={user.phone}
//                     onChange={handleChange}
//                 /><br /><br />
//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={user.password}
//                     onChange={handleChange}
//                 /><br /><br />
//                 <button type="submit">{user.id ? "Update User" : "Add User"}</button>
//             </form>
//         </div>
//     )
// }

// export default Form






// import React, { useContext } from "react";
// import { UserContext } from "../Context/UserContextProvider";
// // import Form from "./Components/Form/Form.jsx"


// const Form = () => {
//     const {
//         user,
//         handleChange,
//         handleSubmit
//     } = useContext(UserContext);

//     return (
//         <div className="form">
//             <h1>Create Record</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Name"
//                     name="name"
//                     value={user.name}
//                     onChange={handleChange}
//                 />
//                 <br /><br />
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     name="email"
//                     value={user.email}
//                     onChange={handleChange}
//                 />
//                 <br /><br />
//                 <input
//                     type="text"
//                     placeholder="Phone Number"
//                     name="phone"
//                     value={user.phone}
//                     onChange={handleChange}
//                 />
//                 <br /><br />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     name="password"
//                     value={user.password}
//                     onChange={handleChange}
//                 />
//                 <br /><br />
//                 <button type="submit">
//                     {user.id ? "Update" : "Add"} User
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Form;





